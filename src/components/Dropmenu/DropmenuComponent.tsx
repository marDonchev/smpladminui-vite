import "./DropmenuComponent.scss";

import { CSSProperties, MouseEvent, ReactNode } from "react";

import { IconComponent as Icon } from "./../Icon/IconComponent.jsx";

interface DropmenuOption {
    icon: ReactNode;
    label: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IDropmenuComponent {
    options: DropmenuOption[];
    style?: CSSProperties;
    disabled?: boolean;
    primary?: boolean;
    danger?: boolean;
    success?: boolean;
    processing?: boolean;
    children?: ReactNode;
}
export const DropmenuComponent = ({
    options = [
        {
            icon: <Icon type={"listtype_list"} variant={"grey"} />,
            label: "View as List",
            onClick: undefined,
        },
        {
            icon: <Icon type={"listtype_cards"} variant={"grey"} />,
            label: "View as Cards",
            onClick: () => {
                // eslint-disable-next-line no-alert
                alert("test");
            },
        },
    ],
    style,
    disabled,
    primary,
    danger,
    success,
    processing,
}: IDropmenuComponent) => {
    // Classes
    const classes = [
        "smpladmin_Dropmenu",
        ...[primary && "smpladmin_primary"],
        ...[danger && "smpladmin_danger"],
        ...[success && "smpladmin_success"],
        ...[processing && "smpladmin_processing"],
        ...[disabled && "smpladmin_disabled"],
    ];

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                <button></button>

                <div className="smpladmin_Dropmenu_Options">
                    {options &&
                        options.map((o, oIndex) => {
                            return (
                                <div
                                    key={oIndex}
                                    className="smpladmin_Dropmenu_Option"
                                    onClick={(e) =>
                                        typeof o.onClick == "function" ? o.onClick(e) : null
                                    }
                                >
                                    {o.icon}
                                    {o.label}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default DropmenuComponent;
