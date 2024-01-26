---
title: 命令
date: 2023-08-11
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

没有使用第三方框架提供的命令，自带的命令在使用中有点繁琐。

需要对[ICommand](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/commanding-overview?view=netframeworkdesktop-4.8)命令进行包装。

在写demo时很方便使用。

## 基本命令

将`ICommand`里的`Execute`执行方法迁移到MVVM中。

```cs
 public class RelayCommand : ICommand
 {
     private Action<object?> _execute;
     private Predicate<object?> _canExecute;

     public event EventHandler? CanExecuteChanged{
         add
         {
             CommandManager.RequerySuggested += value;
         }
         remove
         {
             CommandManager.RequerySuggested -= value;
         }
     }

     public RelayCommand(Action<object?> execute):this(execute,(o)=>true){}

     public RelayCommand(Action<object?> execute,Predicate<object?> canExecute) {
         if(execute==null) throw new ArgumentNullException(nameof(execute));
         if(canExecute==null) throw new ArgumentNullException(nameof(canExecute));
         _execute = execute;
         _canExecute = canExecute;
     }

     public bool CanExecute(object? parameter){
         return _canExecute(parameter);
     }

     public void Execute(object? parameter){
         _execute(parameter);
     }
 }
```

## [异步编程](https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2014/april/async-programming-patterns-for-asynchronous-mvvm-applications-commands)

1. 定义异步命令接口，继承`ICommand`，添加一个`ExecuteAsync`方法

    ```cs
    public interface IAsyncCommand:ICommand{
        Task ExecuteAsync(object? parameter);
    }
    ```

2. 添加异步命令抽象类

    ```cs
    public abstract class AsyncCommandBase : IAsyncCommand{
        public abstract bool CanExecute(object? parameter);

        public async void Execute(object? parameter) { 
            await ExecuteAsync(parameter);
        }

        public event EventHandler? CanExecuteChanged{
            add { CommandManager.RequerySuggested += value; }
            remove { CommandManager.RequerySuggested -= value; }
        }

        public abstract Task ExecuteAsync(object? parameter);

        protected void RaiseCanExecuteChanged(){
            CommandManager.InvalidateRequerySuggested();
        }
    }
    ```

3. 异步执行具体命令类，包括取消，异步状态通知等

    ```cs
    public class AsyncCommand<TResult> : AsyncCommandBase, INotifyPropertyChanged{
        private readonly Func<CancellationToken,Task<TResult>> _command;
        private readonly CancelAsyncCommand _canncelCommand;
        private NotifyTaskCompletion<TResult> _execution;

        public AsyncCommand(Func<CancellationToken,Task<TResult>> command){
            _command = command;
            _canncelCommand=new CancelAsyncCommand();
        }

        public override bool CanExecute(object? parameter){
            return Execution == null|| Execution.IsCompleted;
        }

        public override async Task ExecuteAsync(object? parameter){
            _canncelCommand.NotifyCommandStarting();
            Execution = new NotifyTaskCompletion<TResult>(_command(_canncelCommand.Token));
            RaiseCanExecuteChanged();
            await Execution.TaskCompletion;

            _canncelCommand.NotifyCommandFinished();
            RaiseCanExecuteChanged();
        }

        public ICommand CancelCommand { get { return _canncelCommand; } }

        public NotifyTaskCompletion<TResult> Execution{
            get { return _execution; }
            private set
            {
                _execution = value;
                OnPropertyChanged();
            }
        }

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string? propertyName =null){
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private sealed class CancelAsyncCommand : ICommand{
            private CancellationTokenSource _cts = new CancellationTokenSource();
            private bool _commandExecuting;

            public CancellationToken Token { get { return _cts.Token; } }

            public void NotifyCommandStarting(){
                _commandExecuting = true;
                if (!_cts.IsCancellationRequested) return;
                _cts=new CancellationTokenSource();
                RaiseCanExecuteChanged();
            }

            public void NotifyCommandFinished(){
                _commandExecuting = false;
                RaiseCanExecuteChanged();
            }

            public event EventHandler? CanExecuteChanged {
                add { CommandManager.RequerySuggested += value; }
                remove { CommandManager.RequerySuggested -= value; }
            }

            private void RaiseCanExecuteChanged(){
                CommandManager.InvalidateRequerySuggested();
            }

            bool ICommand.CanExecute(object? parameter){
                return _commandExecuting && !_cts.IsCancellationRequested;
            }

            void ICommand.Execute(object? parameter){
                _cts.Cancel();
                RaiseCanExecuteChanged();
            }
        }
    }

    public static class AsyncCommand{
        public static AsyncCommand<object> Create(Func<Task> command){
            return new AsyncCommand<object>(async _ => { await command(); return null; });
        }

        public static AsyncCommand<TResult> Create<TResult>(Func<Task<TResult>> command){
            return new AsyncCommand<TResult>(_ => command());
        }

        public static AsyncCommand<object> Create(Func<CancellationToken,Task> command){
            return new AsyncCommand<object>(async token => { await command(token); return null; });
        }

        public static AsyncCommand<TResult> Create<TResult>(Func<CancellationToken,Task<TResult>> command){
            return new AsyncCommand<TResult>(command);
        }
    }
    ```

4. 异步执行状态通知

    ```cs
    public sealed class NotifyTaskCompletion<TResult> : INotifyPropertyChanged{
        public NotifyTaskCompletion(Task<TResult> task){
            Task = task;
            TaskCompletion = WatchTaskAsync(task);
        }
        private async Task WatchTaskAsync(Task task){
            try{
                await task;
            }
            catch{}

            var propertyChanged = PropertyChanged;
            if (propertyChanged == null)
                return;
            propertyChanged(this, new PropertyChangedEventArgs("Status"));
            propertyChanged(this, new PropertyChangedEventArgs("IsCompleted"));
            propertyChanged(this, new PropertyChangedEventArgs("IsNotCompleted"));
            if (task.IsCanceled){
                propertyChanged(this, new PropertyChangedEventArgs("IsCanceled"));
            }
            else if (task.IsFaulted){
                propertyChanged(this, new PropertyChangedEventArgs("IsFaulted"));
                propertyChanged(this, new PropertyChangedEventArgs("Exception"));
                propertyChanged(this, new PropertyChangedEventArgs("InnerException"));
                propertyChanged(this, new PropertyChangedEventArgs("ErrorMessage"));
            }
            else{
                propertyChanged(this, new PropertyChangedEventArgs("IsSuccessfullyCompleted"));
                propertyChanged(this, new PropertyChangedEventArgs("Result"));
            }
        }
        public Task<TResult> Task { get; private set; }
        public Task TaskCompletion { get; private set; }
        public TResult Result{
            get
            {
                return (Task.Status == TaskStatus.RanToCompletion) ?
                    Task.Result : default(TResult);
            }
        }
        public TaskStatus Status { get { return Task.Status; } }
        public bool IsCompleted { get { return Task.IsCompleted; } }
        public bool IsNotCompleted { get { return !Task.IsCompleted; } }
        public bool IsSuccessfullyCompleted{
            get
            {
                return Task.Status ==
                    TaskStatus.RanToCompletion;
            }
        }
        public bool IsCanceled { get { return Task.IsCanceled; } }
        public bool IsFaulted { get { return Task.IsFaulted; } }
        public AggregateException Exception { get { return Task.Exception; } }
        public Exception InnerException{
            get{
                return (Exception == null) ?
                    null : Exception.InnerException;
            }
        }
        public string ErrorMessage{
            get{
                return (InnerException == null) ?
                    null : InnerException.Message;
            }
        }
        public event PropertyChangedEventHandler PropertyChanged;
    }
    ```
