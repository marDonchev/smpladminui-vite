import "./ToggleComponent.scss";

import { CSSProperties, ReactNode, useState } from "react";

export interface IToggleComponent {
    label?: string;
    onToggle: (value: boolean) => void;
    style?: CSSProperties;
    disabled?: boolean;
    value: boolean;
    children?: ReactNode;
}
export const ToggleComponent = ({
    label = "Toggle",
    onToggle,
    disabled = false,
    value = false,
    style,
    children,
}: IToggleComponent) => {
    const [toggled, setToggled] = useState<boolean>(value);

    // Classes
    const classes = [
        "smpladmin_Toggle",
        ...[toggled === true && "smpladmin_True"],
        ...[disabled && "smpladmin_disabled"],
    ];
    // Style
    const componentStyle = style || {};

    const handleClick = (): void => {
        setToggled((toggled) => !toggled);
        if (onToggle) onToggle(!toggled);
    };

    return (
        <div className={classes.join(" ")} style={componentStyle} onClick={handleClick}>
            <i />
            <div className="smpladmin_Toggle_Children">{children ? children : label}</div>
        </div>
    );
};

export default ToggleComponent;
