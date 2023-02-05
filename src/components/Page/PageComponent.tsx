import "./PageComponent.scss";

import { CSSProperties, ReactNode } from "react";

export interface IPageComponent {
    label?: ReactNode;
    stickyHeader?: boolean;
    style?: CSSProperties;
    children?: ReactNode;
}
export const PageComponent = ({
    label = "Page Label",
    stickyHeader,
    style,
    children,
}: IPageComponent) => {
    // Classes
    const classes = ["smpladmin_Page"];

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                <div
                    className={
                        !stickyHeader
                            ? "smpladmin_Page_HeaderRow"
                            : "smpladmin_Page_HeaderRow smpladmin_sticky"
                    }
                >
                    <div className={"smpladmin_Page_PageTitle"}>{label}</div>
                </div>
                {children ? children : label}
            </div>
        </>
    );
};

export default PageComponent;
