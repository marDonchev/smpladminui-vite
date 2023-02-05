// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WrapperComponent } from "./../components/Wrapper/WrapperComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Wrapper",
    component: WrapperComponent,
} as ComponentMeta<typeof WrapperComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof WrapperComponent> = (args) => <WrapperComponent {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    children: (
        <>
            <h1>h1 - Wrapper</h1>
            <h2>h2 - Wrapper</h2>
            <h3>h3 - Wrapper</h3>
            <h4>h4 - Wrapper</h4>
            <h5>h5 - Wrapper</h5>
            <h6>h6 - Wrapper</h6>
            <button>Sample Button</button>
        </>
    ),
};
