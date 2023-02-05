// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LayoutComponent } from "./../components/Layout/LayoutComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Layout",
    component: LayoutComponent,
} as ComponentMeta<typeof LayoutComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LayoutComponent> = (args) => <LayoutComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    leftLabel: "leftLabel",
    leftSublabel: "leftSublabel",
    centerLabel: "centerLabel",
    centerSublabel: "centerSublabel",
    centerRightIcon: <></>,
    centerRightText: "Text",
    footerLabel: "footerLabel",
    footerIcon: <></>,
    progress: 50,
    style: {},
};
