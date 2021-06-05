import React from 'react';
import ButtonIsolation from '../../components/00_ButtonIsolation/ButtonIsolation'
import { SiNintendoswitch } from 'react-icons/si';

// init component story
export default {
  title: 'Buttons/ButtonIsolation',
  component: ButtonIsolation,
  argTypes: {
    text: {
      table: {
        category: 'Content'
      }
    },
    icon: {
      table: {
        category: 'Content'
      }
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'radio' },
      table: {
        category: 'Size'
      }
    },
    round: {
      table: {
        category: 'Shape'
      }
    },
    rhombus: {
      table: {
        category: 'Shape'
      }
    },
    thick: {
      table: {
        category: 'Shape'
      }
    },
    convex: {
      table: {
        category: 'Shape'
      }
    },
    onClick: {
      table: {
        category: 'Event'
      }
    }
  },
  parameters : {
    docs: {
      description: {
        component: 'This component should ideally display a single letter, symbol or icon. ',
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
      story: 'The icon prop require `react-icons` rendered component'
    }
  }
}

// story: round
export const Round = Template.bind({});
Round.args = {
  ...Default.args,
  round: true,
  convex: true
}
Round.parameters = {
  docs: {
    description: {
      story: '`round` + `convex`'
    }
  }
}

// story: rhombus
export const Rhombus = Template.bind({});
Rhombus.args = {
  ...Default.args,
  rhombus: true
}

