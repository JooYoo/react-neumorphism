import React from 'react';
import Button from '../../components/01_Button/Button';
import { SiNintendoswitch } from 'react-icons/si';

//init story
export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A variety of buttons.',
      },
    },
  },
};

//init Template
const Template = (args) => <Button {...args} />;

// story: Default
export const Default = Template.bind({});
Default.args = {
  size: 'middle',
  icon: null,
  text: 'Press',
  round: false,
  thick: false,
  convex: false,
  start: false,
  end: false,
};

// story: With Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <SiNintendoswitch />,
};
WithIcon.parameters = {
  docs: {
    description: {
      story: 'The icon prop require `react-icons` rendered component',
    },
  },
};
