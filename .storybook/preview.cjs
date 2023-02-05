import "./../src/components/style.scss";
import "./../src/components/Button/ButtonComponent.scss";
import "./../src/components/Card/CardComponent.scss";
import "./../src/components/Dropmenu/DropmenuComponent.scss";
import "./../src/components/Icon/IconComponent.scss";
import "./../src/components/ImagesList/ImagesListComponent.scss";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
