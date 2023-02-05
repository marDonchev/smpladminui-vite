import "./ListComponent.scss";

import { CSSProperties, ReactNode } from "react";

import { ButtonComponent as Button } from "./../Button/ButtonComponent.jsx";
import { IconComponent as Icon } from "./../Icon/IconComponent.jsx";

export interface IListComponent {
    header?: string[];
    list: ReactNode[];
    footer?: ReactNode;
    style?: CSSProperties;
}
export const ListComponent = ({
    header = ["Name", "Structure", "Updated on", "Actions"],
    list = [
        [
            "UX Science progress experiment with a very very long name that goes on one line for a long line",
            "Root / All Static Pages",
            "15 Dec 12:45",
            <>
                <Button variant="danger" style={{ float: "right" }}>
                    delete
                </Button>
                <Button style={{ float: "right" }}>edit</Button>
                <Icon type={"bookmark_on"} variant={"grey"} style={{ float: "right" }} />
            </>,
        ],
        [
            "UX Science progress experiment with a very very long name that goes on one line for a long line",
            "Root / All Static Pages",
            "15 Dec 12:45",
            <>
                <Button variant="danger" style={{ float: "right" }}>
                    delete
                </Button>
                <Button style={{ float: "right" }}>edit</Button>
                <i style={{ float: "right" }} className="smpladmin_icon_bookmark_on_grey"></i>
            </>,
        ],
    ],
    footer = (
        <>
            <Button style={{ float: "right" }}>NEXT &gt;</Button>
            <Button style={{ float: "right" }}>4</Button>
            <Button style={{ float: "right" }}>3</Button>
            <Button style={{ float: "right" }}>2</Button>
            <Button style={{ float: "right" }}>&lt; PREV</Button>
        </>
    ),
    style,
}: IListComponent) => {
    // Classes
    const classes = ["smpladmin_List"];

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                <table>
                    <thead>
                        <tr>
                            {header &&
                                header.map((h: string, hIndex: number) => {
                                    return <th key={hIndex}>{h}</th>;
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {list
                            ? list.map((l: any, lIndex: number) => {
                                  const content = (
                                      <tr key={lIndex}>
                                          {l.map((le: ReactNode, leIndex: number) => {
                                              return <td key={leIndex}>{le}</td>;
                                          })}
                                      </tr>
                                  );
                                  return content;
                              })
                            : null}
                    </tbody>
                </table>
                <div className="smpladmin_List_Footer">{footer}</div>
            </div>
        </>
    );
};

export default ListComponent;
