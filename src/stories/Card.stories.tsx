// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CardComponent } from "./../components/Card/CardComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Card",
    component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
