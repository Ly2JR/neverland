export default {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never", 10],
    "scope-max-length": [2, "always", 40],
    "subject-max-length": [2, "always", 10],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      ["feat", "style", "docs", "chore", "build", "release"],
    ],
  },
  prompt: {
    settings: {},
    messages: {
      skip: ":跳过",
      max: "最大 %d 字符",
      min: "至少 %d 字符",
      emptyWarning: "不能为空",
      upperLimitWarning: "超过限制",
      lowerLimitWarning: "低于限制",
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "新功能",
            title: "Features",
            emoji: "✨",
          },
          docs: {
            description: "仅文档更改",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description: "不影响代码含义的更改(空格,格式,缺少分号等)",
            title: "Styles",
            emoji: "💎",
          },
          build: {
            description:
              "影响生成系统或外部依赖项的更改(例如:gulp、broccoli,npm)",
            title: "Builds",
            emoji: "🛠",
          },
          chore: {
            description: "不包含src或test文件的其他更改",
            title: "Chores",
            emoji: "♻️",
          },
          release: {
            description: "发包",
            title: "Releases",
            emoji: "🚀",
          },
        },
      },
      scope: {
        description: "此更改的范围是什么（例如组件或文件名）",
      },
      subject: {
        description: "写一个简短的、祈使式的时态描述变化",
      },
      body: {
        description: "提供更改的更长说明",
      },
      isBreaking: {
        description: "是否有任何重大更改？",
      },
      breakingBody: {
        description: "中断性变更提交需要正文。请输入提交本身的详细描述",
      },
      breaking: {
        description: "描述中断性变更",
      },
      isIssueAffected: {
        description: "此更改是否会影响任何未解决的问题？",
      },
      issuesBody: {
        description:
          "如果问题已关闭，则提交需要一个正文。请输入提交本身的详细描述",
      },
      issues: {
        description: '添加问题引用(e.g. "fix #123", "re #123".)',
      },
    },
  },
};
