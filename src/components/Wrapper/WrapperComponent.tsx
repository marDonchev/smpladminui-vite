import "./WrapperComponent.scss";

import { CSSProperties, ReactNode } from "react";

export interface IWrapperComponent {
    style?: CSSProperties;
    children?: ReactNode;
}
export const WrapperComponent = ({ style, children, ...props }: IWrapperComponent) => {
    // Classes
    const classes = ["smpladmin_Wrapper"];
    // Style
    const componentStyle = style || {};

    return (
        <div className={classes.join(" ")} style={componentStyle} {...props}>
            {children}
        </div>
    );
};

export default WrapperComponent;
