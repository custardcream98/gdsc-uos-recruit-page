module.exports = {
  stories: [
    "../src/.stories/**/*.stories.mdx",
    "../src/.stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    previewMdx2: true,
  },
  async webpackFinal(config) {
    config.module.rules.push({
      resolve: { fullySpecified: false },
    });
    return config;
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
        "preset-react-jsx-transform",
      ],
    ],
  }),
};
