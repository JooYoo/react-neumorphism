import React from 'react';
import TextBox from '../../components/04_TextBox/TextBox';

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
  label: 'User name ...',
  placeholder: 'User name ...',
  description: 'Please enter your user name',
  textarea: '',
  valid: false,
  invalid: false,
  disable: false,
  icon: null,
};
