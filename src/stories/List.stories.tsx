// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListComponent } from "./../components/List/ListComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "List",
    component: ListComponent,
} as ComponentMeta<typeof ListComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListComponent> = (args) => <ListComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
