@echo off
REM 声明采用UTF-8编码
chcp 65001 >nul
REM 遇到任一命令失败立即中止，避免带着错误继续 tag/push 造成假成功
setlocal
set "LOCAL_TAG=neverland/blog"
set "REMOTE_TAG=docker.ilyl.life:8443/neverland/blog"

echo [1/3] 构建镜像 %LOCAL_TAG% ...
docker build -t %LOCAL_TAG% -f Dockerfile .
if errorlevel 1 goto :fail
echo [OK] 编译成功

echo [2/3] 标记镜像 %REMOTE_TAG% ...
docker tag %LOCAL_TAG% %REMOTE_TAG%
if errorlevel 1 goto :fail
echo [OK] 标记成功

echo [3/3] 推送镜像 %REMOTE_TAG% ...
docker push %REMOTE_TAG%
if errorlevel 1 goto :fail
echo [OK] 架设成功
exit /b 0

:fail
echo [FAIL] 发布失败，请检查上方错误
exit /b 1
