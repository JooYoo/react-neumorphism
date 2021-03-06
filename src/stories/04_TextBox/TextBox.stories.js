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

// story: Textarea
export const Textarea = Template.bind({});
Textarea.args = {
  ...Default.args,
  placeholder: 'Enter long text...',
  textarea: true,
};
Textarea.parameters = {
  docs: {
    description: {
      story: 'The textbox can be expended vertically',
    },
  },
};

// story: Disable
export const Disable = Template.bind({});
Disable.args = {
  ...Default.args,
  disable: true,
};
Disable.parameters = {
  docs: {
    description: {
      story: 'The textbox can be expended vertically',
    },
  },
};

// story: Valid
export const Valid = Template.bind({});
Valid.args = {
  ...Default.args,
  valid: true,
};
Valid.parameters = {
  docs: {
    description: {
      story: 'The content of the TextBox is valid.',
    },
  },
};

// story: Invalid
export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  invalid: true,
};
Invalid.parameters = {
  docs: {
    description: {
      story: 'The content of the TextBox is invalid.',
    },
  },
};
