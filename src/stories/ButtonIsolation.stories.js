import React from 'react';
import ButtonIsolation from '../components/00_ButtonIsolation/ButtonIsolation';

// init component story
export default {
  title: 'Buttons/ButtonIsolation',
  component: ButtonIsolation,
  argTypes: {
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'radio' },
    },
  },
};

// create a Template as function, get it ready to be copied
const Template = (args) => <ButtonIsolation {...args} />;

// add stories
export const Default = Template.bind({});
Default.args = {
  text: 'H',
  size: 'middle',
  round: false,
  rhombus: false,
  thick: false,
  convex: false,
};

// TODO: Icon as another story
