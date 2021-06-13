import React from 'react';
import TextBox from '../../components/04_TextBox/TextBox';
import { SiNintendoswitch } from 'react-icons/si';

// init story
export default {
  title: 'Forms/TextBox',
  component: TextBox,
};

// init Template
const Template = (args) => <TextBox {...args} />;

// story: Default
export const Default = Template.bind({});
Default.args = {
  large: false,
  label: '',
  placeholder: 'Enter user name...',
  description: '',
  textarea: '',
  valid: false,
  invalid: false,
  disable: false,
  icon: null,
};

// story: With Label Desc
export const WithLabelDesc = Template.bind({});
WithLabelDesc.args = {
  ...Default.args,
  label: 'User name',

  description: 'Please enter your user name',
};
WithLabelDesc.parameters = {
  docs: {
    description: {
      story: 'TextBox with Label and Description',
    },
  },
};

// story: WithIcon
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
