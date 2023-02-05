import "./CardComponent.scss";

import { CSSProperties, ReactNode } from "react";

import { ButtonComponent as Button } from "./../Button/ButtonComponent.jsx";

export interface ICardComponent {
    header?: boolean | string | ReactNode;
    footer?: boolean | string | ReactNode;
    style?: CSSProperties;
    type?: string;
    imageUrl?: string;
    fileType?: string;
    children?: ReactNode;
}
export const CardComponent = ({
    header,
    footer = (
        <>
            <Button style={{ float: "left" }}>edit</Button>
            <Button style={{ float: "left" }} variant="danger">
                delete
            </Button>
            Updated on
            <br />
            15 Dec 2017
        </>
    ),
    style = {},
    type = "children",
    imageUrl = "",
    fileType = "video_mp4",
    children,
}: ICardComponent) => {
    // Classes
    const classes = ["smpladmin_Card"];

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                <div className="smpladmin_Card_Header">{header}</div>
                <div
                    className={
                        type === "children"
                            ? "smpladmin_Card_Body"
                            : type === "file"
                            ? fileType
                                ? "smpladmin_Card_Body smpladmin_Card_BodyFile " + fileType
                                : "smpladmin_Card_Body smpladmin_Card_BodyFile"
                            : "smpladmin_Card_Body smpladmin_Card_BodyImage"
                    }
                    style={
                        type === "image"
                            ? {
                                  backgroundImage: `url(${imageUrl})`,
                              }
                            : undefined
                    }
                >
                    {children}
                </div>
                <div className="smpladmin_Card_Footer">{footer}</div>
            </div>
        </>
    );
};

export default CardComponent;
