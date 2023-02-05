import "./LayoutComponent.scss";

import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import { IconComponent as Icon } from "./../Icon/IconComponent.jsx";

interface ILayoutSidebarElement {
    type: string;
    label: string;
    description?: string;
    icon?: ReactNode;
    selected?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement> | null | undefined;
}

export interface ILayoutComponent {
    leftLabel?: ReactNode;
    leftSublabel?: ReactNode;
    centerLabel?: ReactNode;
    centerSublabel?: ReactNode;
    centerRightIcon?: ReactNode;
    centerRightText?: ReactNode;
    footerLabel?: ReactNode;
    footerIcon?: ReactNode;
    progress: number | null;
    style?: CSSProperties;
    sidebarElements: ILayoutSidebarElement[];
    children?: ReactNode;
}
export const LayoutComponent = ({
    leftLabel,
    leftSublabel,
    centerLabel,
    centerSublabel,
    centerRightIcon,
    centerRightText,
    footerLabel,
    footerIcon,
    progress,
    style,
    children,
    sidebarElements = [
        {
            type: "item",
            label: "Dashboard",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"dashboard"} variant={"white"} />,
            selected: true,
            onClick: null,
        },
        { type: "section", label: "MAIN SECTION" },
        {
            type: "item",
            label: "Structure",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"structure"} variant={"white"} />,
            selected: false,
            onClick: null,
        },
        {
            type: "item",
            label: "Static Content",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"static"} variant={"white"} />,
            selected: false,
            onClick: null,
        },
        {
            type: "item",
            label: "Collections",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"collections"} variant={"white"} />,
            selected: false,
            onClick: null,
        },
        {
            type: "item",
            label: "Files",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"files"} variant={"white"} />,
            selected: false,
            onClick: null,
        },
        { type: "section", label: "DEVELOPERS SECTION" },
        {
            type: "item",
            label: "Project Settings",
            description: "This is explanation about the dashboard section",
            icon: <Icon type={"projectsettings"} variant={"white"} />,
            selected: false,
            onClick: null,
        },
    ],
}: ILayoutComponent) => {
    // Classes
    const classes = ["smpladmin_Layout"];

    // Style
    const componentStyle = style || {};

    return (
        <div className={classes.join(" ")} style={componentStyle}>
            <div className="smpladmin_Layout_TopHeader">
                <div>
                    <h1>{leftLabel}</h1>
                    <h2>{leftSublabel}</h2>
                </div>
                <div>
                    <h1>{centerLabel}</h1>
                    <h2>{centerSublabel}</h2>
                    {progress != null ? (
                        <div className="success smpladmin_progress">
                            <div
                                className="smpladmin_progress-meter"
                                style={{ width: progress + "%" }}
                            ></div>
                        </div>
                    ) : null}

                    {centerRightIcon ? centerRightIcon : null}
                    {centerRightText ? <h3>{centerRightText}</h3> : null}
                </div>
            </div>
            <div className="smpladmin_Layout_MidBody">
                <div className="smpladmin_Layout_SideBar">
                    {sidebarElements &&
                        sidebarElements.map((se, seIndex) => {
                            if (se.type === "item") {
                                return (
                                    <div
                                        key={seIndex}
                                        className={
                                            !se.selected
                                                ? "smpladmin_Layout_SideBar_item"
                                                : "smpladmin_Layout_SideBar_item smpladmin_selected"
                                        }
                                        onClick={
                                            se.onClick && typeof se.onClick === "function"
                                                ? se.onClick
                                                : undefined
                                        }
                                    >
                                        {se.icon ? se.icon : null}
                                        <h1>{se.label}</h1>
                                        <h2>{se.description}</h2>
                                    </div>
                                );
                            }

                            if (se.type === "section") {
                                return (
                                    <div key={seIndex} className="smpladmin_Layout_SideBar_Section">
                                        {se.label}
                                    </div>
                                );
                            }
                            return null;
                        })}

                    <div className="smpladmin_Layout_Footer">
                        <span>{footerLabel}</span>
                        {footerIcon && footerIcon}
                    </div>
                </div>
                <div className="smpladmin_Layout_Page">{children ? children : null}</div>
            </div>
        </div>
    );
};

export default LayoutComponent;
