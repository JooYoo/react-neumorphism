import React from 'react';
import ButtonIsolation from '../../components/00_ButtonIsolation/ButtonIsolation'
import { SiNintendoswitch } from 'react-icons/si';

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
  parameters : {
    docs: {
      description: {
        component: 'This component should ideally display a single letter, symbol or icon.',
      },
    }
  }
};

// create a Template as function, get it ready to be copied
const Template = (args) => <ButtonIsolation {...args} />;

// story: Default
export const Default = Template.bind({});
Default.args = {
  text: 'H',
  size: 'middle',
  round: false,
  rhombus: false,
  thick: false,
  convex: false,
};

// story: With Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <SiNintendoswitch/>
}
WithIcon.parameters = {
  docs: {
    description: {
      story: 'This is a story for ButtonIsolation with Icon'
    }
  }
}
