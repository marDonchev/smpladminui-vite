// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PopupComponent } from "./../components/Popup/PopupComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Popup",
    component: PopupComponent,
} as ComponentMeta<typeof PopupComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PopupComponent> = (args) => <PopupComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    label: "Popup Label",
    hint: "Popup hint",
    type: "normal",
    footer: <>Just a footer</>,
    time: 0,
    visible: true,
};

export const Message = Template.bind({});

Message.args = {
    label: "Message",
    type: "message",
    time: 5,
    visible: true,
    children: <>This is the text of the message</>,
    onClose: () => {
        // eslint-disable-next-line no-alert
        alert("Close");
    },
};
