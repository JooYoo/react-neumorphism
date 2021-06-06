import React from "react";
import TextBlock from "../../components/03_TextBlock/TextBlock";

//init story
export default {
    title: 'Text/TextBlock',
    component: TextBlock,
    argTypes: {
        size: {
            options: ['small', 'middle', 'large'],
            control: {type: 'radio'}
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
}