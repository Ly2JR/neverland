---
title: 规范约束
date: 2023-06-06
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - ESLint
  - prettier
  - stylelint
  - husky
  - nano-staged
  - commitlint
---

项目提交规范涉及以下几个包

|序号|包名|简介|
|:-|:-|:-|
|1|[ESLint](https://eslint.org/)|检查js问题并修复|
|2|[prettier](https://prettier.io/)|格式化代码|
|3|[stylelint](https://stylelint.io/)|检查css问题并修复|
|4|[husky](https://typicode.github.io/husky/)|Git钩子|
|5|[nano-staged](https://github.com/usmanyunusov/nano-staged#readme)|轻量级的,将检查范围定位在提交的文件中,同[lint-staged](https://github.com/okonet/lint-staged#readme)|
|6|[commitlint](https://commitlint.js.org/#/)|配置提交约定|
|7|[cz-commitlint](https://www.npmjs.com/package/@commitlint/cz-commitlint)|提交时选择|

## 安装步骤

以`nano-staged`、`PNPM`为例，按[文档](https://github.com/usmanyunusov/nano-staged#readme)说明安装。

:::warning

- `commitlint.config.js`默认是`UTF-16 LE`编码格式，请重新保存为`UTF-8`编码格式
- `commitlint.config.js`默认是`CommonJs`规范，请更改后缀名为`cjs`变成`ESMoudle`规范
- 请自行在`commitlint.config.cjs`里添加`rules`。
- 相关包的配置见对应官方配置说明
:::

1. 安装`nano-staged`

   ```bash
   pnpm add nano-staged -D
   ```

2. 新建`nano-staged`的[配置文件](https://github.com/usmanyunusov/nano-staged#format-priorities)

   ```bash
   {
      "*.{js,ts}": "prettier --write",
      "*.css": ["stylelint", "eslint --fix"]
   }
   ```

3. 安装`husky`

   ```bash
   pnpm add husky -D
   ```

4. 启用Git钩子

   ```bash
   npx husky install
   ```

5. 添加预提交命令到钩子上

   ```bash
   npx husky add .husky/pre-commit "./node_modules/.bin/nano-staged"
   ```

6. 为了每次安装自动执行，需要编辑`package.json`

   ```json
   "scripts": {
     "postinstall": "npx husky install"
   }
   ```

7. 安装`prettier`、`stylelint`、`eslint`

   ```bash
   pnpm add prettier styleint eslint -D
   ```

8. 安装`commitlint`

   ```bash
   pnpm add @commitlint/config-conventional @commitlint/cli -D
   ```

9. 配置约束

   ```bash
   echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
   ```

10. 添加提交约束

   ```bash
   npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
   ```

11. 测试验证

   ```bash
   npx commitlint --from HEAD~1 --to HEAD --verbose
   ```

12. 添加选择提交

   配置commitizen adapter

   ```bash
   pnpm install --save-dev @commitlint/cz-commitlint commitizen inquirer@8
   ```

   在`package.json`中添加

   ```json
   {
      "scripts": {
         "commit": "git-cz"
      },
      "config": {
         "commitizen": {
            "path": "@commitlint/cz-commitlint"
         }
      }
   }
   ```

   在`commitlint.config.cjs`里添加提示词

   ```js
   module.exports = {
   parserPreset: 'conventional-changelog-conventionalcommits',
   rules: {
      ...
   },
   prompt: {
      settings: {},
      messages: {
         skip: ':skip',
         max: 'upper %d chars',
         min: '%d chars at least',
         emptyWarning: 'can not be empty',
         upperLimitWarning: 'over limit',
         lowerLimitWarning: 'below limit'
      },
      questions: {
         type: {
         description: "Select the type of change that you're committing:",
         enum: {
            feat: {
               description: 'A new feature',
               title: 'Features',
               emoji: '✨',
            },
            fix: {
               description: 'A bug fix',
               title: 'Bug Fixes',
               emoji: '🐛',
            },
            docs: {
               description: 'Documentation only changes',
               title: 'Documentation',
               emoji: '📚',
            },
            style: {
               description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
               title: 'Styles',
               emoji: '💎',
            },
            refactor: {
               description: 'A code change that neither fixes a bug nor adds a feature',
               title: 'Code Refactoring',
               emoji: '📦',
            },
            perf: {
               description: 'A code change that improves performance',
               title: 'Performance Improvements',
               emoji: '🚀',
            },
            test: {
               description: 'Adding missing tests or correcting existing tests',
               title: 'Tests',
               emoji: '🚨',
            },
            build: {
               description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
               title: 'Builds',
               emoji: '🛠',
            },
            ci: {
               description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
               title: 'Continuous Integrations',
               emoji: '⚙️',
            },
            chore: {
               description: "Other changes that don't modify src or test files",
               title: 'Chores',
               emoji: '♻️',
            },
            revert: {
               description: 'Reverts a previous commit',
               title: 'Reverts',
               emoji: '🗑',
            },
         },
         },
         scope: {
         description:
            'What is the scope of this change (e.g. component or file name)',
         },
         subject: {
         description: 'Write a short, imperative tense description of the change',
         },
         body: {
         description: 'Provide a longer description of the change',
         },
         isBreaking: {
         description: 'Are there any breaking changes?',
         },
         breakingBody: {
         description:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
         },
         breaking: {
         description: 'Describe the breaking changes',
         },
         isIssueAffected: {
         description: 'Does this change affect any open issues?',
         },
         issuesBody: {
         description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
         },
         issues: {
         description: 'Add issue references (e.g. "fix #123", "re #123".)',
         },
      },
   }
   };
   ```

13. 验证

  之前提交

  ```bash
  git add .
  git commit -m 'feat: 添加新功能'
  ```

  更改后提交

  ```bash
  git add .
  pnpm run commit
  ```

## 基本结构

```text
|--demo
| |-.husky
| |--|commit-msg
| |--|pre-commit
| |-src
| |-.nano-staged.json
| |-commitlint.config.cjs
| |-package.json
```

- `.husky`内容如下:

```text
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

- `pre-commit`内容如下:

```txt
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

./node_modules/.bin/nano-staged
```

- `.nano-staged.json`内容如下:

```json
{
    "*.{js,ts}": "prettier --write",
    "*.css": ["stylelint", "eslint --fix"]
 }
```

- `commitlint.config.cjs`内容如下:

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release",
      ],
    ],
  },
};
```

- `package.json`内容如下

```json
{ 
  ...
  "scripts": {
    "postinstall": "npx husky install",
    ...
  },
  "devDependencies": {
    "@commitlint/cli": "^17.6.5",
    "@commitlint/config-conventional": "^17.6.5",
    "eslint": "^8.42.0",
    "husky": "^8.0.3",
    "nano-staged": "^0.8.0",
    "prettier": "^2.8.8",
    "stylelint": "^15.7.0",
    ...
  }
}
```
