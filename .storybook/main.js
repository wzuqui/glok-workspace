module.exports = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "framework": "@storybook/angular",
  "stories": [
    "../projects/**/*.stories.mdx",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
}
