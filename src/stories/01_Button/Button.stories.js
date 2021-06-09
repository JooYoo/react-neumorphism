import React from 'react';
import Button from '../../components/01_Button/Button';
import { SiNintendoswitch } from 'react-icons/si';

//init story
export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    text: {
      table: {
        category: 'Content',
      },
    },
    icon: {
      table: {
        category: 'Content',
      },
    },
    end: {
      table: {
        category: 'Content',
      },
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
      },
    },
    round: {
      table: {
        category: 'Layout',
      },
    },
    thick: {
      table: {
        category: 'Layout',
      },
    },
    convex: {
      table: {
        category: 'Layout',
      },
    },
    onClick: {
      table: {
        category: 'Event',
      },
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

// story: With Icon End
export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  ...Default.args,
  icon: <SiNintendoswitch />,
  end: true,
};
WithIconEnd.parameters = {
  docs: {
    description: {
      story: 'This prop should use with `icon` together.',
    },
  },
};

// story: Round
export const Round = Template.bind({});
Round.args = {
  ...Default.args,
  round: true,
};
Round.parameters = {
  docs: {
    description: {
      story: 'This prop works for WithIcon as well.',
    },
  },
};

// story: Thick
export const Thick = Template.bind({});
Thick.args = {
  ...Default.args,
  thick: true,
};
Thick.parameters = {
  docs: {
    description: {
      story: 'This prop can be used with other props.',
    },
  },
};

// story: Convex
export const Convex = Template.bind({});
Convex.args = {
  ...Default.args,
  convex: true,
};
Convex.parameters = {
  docs: {
    description: {
      story: 'This prop can be used with other props.',
    },
  },
};
