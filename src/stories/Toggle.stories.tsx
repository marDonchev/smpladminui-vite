// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToggleComponent } from "./../components/Toggle/ToggleComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Toggle",
    component: ToggleComponent,
} as ComponentMeta<typeof ToggleComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ToggleComponent> = (args) => <ToggleComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    label: "Toggle",
    value: true,
    onToggle: (value) => {
        // eslint-disable-next-line no-console
        console.log("toggled value:", value);
    },
};
