// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StatComponent } from "./../components/Stat/StatComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Stat",
    component: StatComponent,
} as ComponentMeta<typeof StatComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof StatComponent> = (args) => <StatComponent {...args} />;

export const Full = Template.bind({});

Full.args = {
    variant: "full",
};

export const Compact = Template.bind({});

Compact.args = {
    variant: "compact",
};
