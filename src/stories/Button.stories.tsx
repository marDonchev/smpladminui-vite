// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonComponent } from "./../components/Button/ButtonComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Button",
    component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    variant: "normal",
    label: "Normal Button",
};

export const Primary = Template.bind({});

Primary.args = {
    variant: "primary",
    label: "Primary Button",
};

export const Danger = Template.bind({});

Danger.args = {
    variant: "danger",
    label: "Danger Button",
};

export const Success = Template.bind({});

Success.args = {
    variant: "success",
    label: "Success Button",
};

export const Processing = Template.bind({});

Processing.args = {
    processing: true,
    label: "Processing Button",
};

export const Submit = Template.bind({});

Submit.args = {
    label: "Submit Button",
    type: "submit",
    form: "myForm",
};
