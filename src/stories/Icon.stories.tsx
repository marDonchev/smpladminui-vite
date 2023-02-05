// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconComponent } from "./../components/Icon/IconComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Icon",
    component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    type: "settings",
    variant: "grey",
};
