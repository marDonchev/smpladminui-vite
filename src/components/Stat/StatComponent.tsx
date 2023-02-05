import "./StatComponent.scss";

import { CSSProperties, ReactNode } from "react";

export interface IStatComponent {
    title?: ReactNode;
    subtitle?: ReactNode;
    diff: number;
    diffPrefix: string;
    diffSuffix: string;
    value: ReactNode;
    dropMenu?: ReactNode;
    variant: "full" | "compact";
    style?: CSSProperties;
    children?: ReactNode;
}
export const StatComponent = ({
    title = <>Stat Title</>,
    subtitle = <>subtitle</>,
    diff = 0,
    diffPrefix = "%",
    diffSuffix = "last month",
    value = 0,
    dropMenu,
    variant = "full",
    style,
    children,
}: IStatComponent) => {
    // Classes
    const classes = [
        "smpladmin_Stat",
        ...[diff > 0 ? "smpladmin_positive" : "smpladmin_negative"],
        ...[variant === "compact" && "smpladmin_compact"],
    ];

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                <div className="smpladmin_Stat_Title">{title}</div>
                <div className="smpladmin_Stat_SubTitle">{subtitle}</div>
                <div className="smpladmin_Stat_Value">{value}</div>
                <div className="smpladmin_Stat_Diff">
                    {diff > 0 ? <span>&uarr;</span> : <span>&darr;</span>}
                    {diff}
                    {diffPrefix} {diffSuffix}
                </div>
                {dropMenu && <div className="smpladmin_Stat_Dropmenu">{dropMenu}</div>}
                <div className="smpladmin_Stat_Body">{children ? children : null}</div>
            </div>
        </>
    );
};

export default StatComponent;
