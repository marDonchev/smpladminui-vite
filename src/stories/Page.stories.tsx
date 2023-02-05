// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PageComponent } from "./../components/Page/PageComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Page",
    component: PageComponent,
} as ComponentMeta<typeof PageComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PageComponent> = (args) => <PageComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    children: (
        <>
            <h2>h2 - Page</h2>
            <h3>h3 - Page</h3>
            <h4>h4 - Page</h4>
            <h5>h5 - Page</h5>
            <h6>h6 - Page</h6>
        </>
    ),
};
