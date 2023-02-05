// Button.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImagesListComponent } from "./../components/ImagesList/ImagesListComponent";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "ImagesList",
    component: ImagesListComponent,
} as ComponentMeta<typeof ImagesListComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ImagesListComponent> = (args) => (
    <ImagesListComponent {...args} />
);

export const ImagesOnly = Template.bind({});

ImagesOnly.args = {
    list: [
        {
            url: "https://picsum.photos/200/300?rnd1",
            key: "test-1",
            extra: "(235 kb)",
            name: "image/jpg - 1-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=2",
            key: "test-2",
            extra: "(235 kb)",
            name: "image/jpg - 2-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=3",
            key: "test-3",
            extra: "(235 kb)",
            name: "image/jpg - 3-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=4",
            key: "test-4",
            extra: "(235 kb)",
            name: "image/jpg - 4-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=5",
            key: "test-5",
            extra: "(235 kb)",
            name: "image/jpg - 5-Filenameofosmething",
        },
    ],
    max: 3,
};

export const FullList = Template.bind({});

FullList.args = {
    list: [
        {
            url: "https://picsum.photos/200/300?rnd1",
            key: "test-1",
            extra: "(235 kb)",
            name: "image/jpg - 1-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=2",
            key: "test-2",
            extra: "(235 kb)",
            name: "image/jpg - 2-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=3",
            key: "test-3",
            extra: "(235 kb)",
            name: "image/jpg - 3-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=4",
            key: "test-4",
            extra: "(235 kb)",
            name: "image/jpg - 4-Filenameofosmething",
        },
        {
            url: "https://picsum.photos/200/300?rnd=5",
            key: "test-5",
            extra: "(235 kb)",
            name: "image/jpg - 5-Filenameofosmething",
        },
    ],
    itemSecondaryKey: "extra",
    selectable: true,
};
