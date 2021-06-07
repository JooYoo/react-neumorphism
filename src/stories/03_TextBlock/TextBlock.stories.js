import React from "react";
import TextBlock from "../../components/03_TextBlock/TextBlock";
import { SiNintendoswitch } from 'react-icons/si';

//init story
export default {
    title: 'Text/TextBlock',
    component: TextBlock,
    argTypes: {
        size: {
            options: ['small', 'middle', 'large'],
            control: {type: 'radio'}
        }
    },
    parameters : {
        docs: {
          description: {
            component: 'This component is used to display static text.',
          },
        }
      }
}

// init Template
const Template =(args)=>(
    <TextBlock {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Et doloremque sit voluptates modi ducimus?
        Reprehenderit a illo id impedit voluptate!
    </TextBlock>)

// story: Default
export const Default = Template.bind({})
Default.args = {
    size: 'small',
    title: undefined,
    titleIcon: undefined,
    right: false,
    center: false,
    oneline: false,
}

// story: With Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  title: "Title",
  titleIcon: <SiNintendoswitch/>
}
WithIcon.parameters = {
  docs: {
    description: {
      story: 'The icon prop require `react-icons` rendered component'
    }
  }
}

// story: Right Alignment
export const RightAlignment = Template.bind({});
RightAlignment.args = {
  ...Default.args,
  title: "Title",
  right: true
}
RightAlignment.parameters = {
  docs: {
    description: {
      story: 'Elements right alignment'
    }
  }
}

// story: Center
export const Center = Template.bind({});
Center.args = {
  ...Default.args,
  title: "Title",
  center: true
}
Center.parameters = {
  docs: {
    description: {
      story: 'Elements centering'
    }
  }
}

// story: Online
export const Online = Template.bind({});
Online.args = {
  ...Default.args,
  oneline: true
}
Online.parameters = {
  docs: {
    description: {
      story: 'Only one line of text is allowed to be displayed.'
    }
  }
}

