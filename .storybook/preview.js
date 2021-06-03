export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'neu-bg',
    values: [
      {
        name: 'neu-bg',
        value: 'rgba(235, 235, 235, 0.5)',
      },
    ],
  },
};
