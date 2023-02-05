// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DropmenuComponent } from "./../components/Dropmenu/DropmenuComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Dropmenu",
    component: DropmenuComponent,
} as ComponentMeta<typeof DropmenuComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DropmenuComponent> = (args) => (
    <DropmenuComponent {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
    style: {
        position: "absolute",
        right: 10,
    },
};
