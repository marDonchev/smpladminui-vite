import "./IconComponent.scss";

import { CSSProperties, MouseEvent } from "react";

export interface IIconComponent {
    type: string;
    variant?: any;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void | null;
    style?: CSSProperties;
}
export const IconComponent = ({
    type = "settings",
    variant = "grey",
    onClick,
    style,
}: IIconComponent) => {
    // Classes
    const classes = ["smpladmin_Icon", ...[type && `smpladmin_icon_${type}_${variant}`]];

    // Style
    const componentStyle = style || {};

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        if (onClick) onClick(event);
    };
    return (
        <>
            <i className={classes.join(" ")} style={componentStyle} onClick={handleClick} />
        </>
    );
};

export default IconComponent;
