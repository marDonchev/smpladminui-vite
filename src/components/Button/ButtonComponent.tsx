import "./ButtonComponent.scss";

import { CSSProperties, MouseEvent, ReactNode } from "react";

type IVariant = "normal" | "primary" | "danger" | "success";

export interface IButtonComponent {
    label?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    style?: CSSProperties;
    disabled?: boolean;
    variant?: IVariant;
    processing?: boolean;
    children?: ReactNode;
}
export const ButtonComponent = ({
    label,
    onClick,
    style,
    disabled,
    variant,
    processing,
    children,
}: IButtonComponent) => {
    // Classes
    const classes = [
        "smpladmin_Button",
        ...[variant && `smpladmin_${variant}`],
        ...[processing && "smpladmin_processing"],
        ...[disabled && "smpladmin_disabled"],
    ];

    // Style
    const componentStyle = style || {};

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        if (onClick) onClick(event);
    };
    return (
        <button className={classes.join(" ")} style={componentStyle} onClick={handleClick}>
            {children ? children : label}
        </button>
    );
};

export default ButtonComponent;
