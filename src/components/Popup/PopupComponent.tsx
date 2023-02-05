/* eslint-disable no-console */
import "./PopupComponent.scss";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export interface IPopupComponent {
    label?: ReactNode;
    hint?: ReactNode;
    footer?: ReactNode;
    style?: CSSProperties;
    type?: string;
    time?: number;
    onClose: () => void;
    visible: boolean;
    children?: ReactNode;
}
export const PopupComponent = ({
    label = "Popup Label",
    hint,
    type = "normal",
    footer,
    style,
    time = 0,
    visible,
    onClose,
    children,
}: IPopupComponent) => {
    const intervalref = useRef<number | null>(null);

    const [timeToCount, setTimeToCount] = useState<number>(time);

    // Start the interval
    const startInterval = () => {
        if (intervalref.current !== null) return;
        intervalref.current = window.setInterval(() => {
            setTimeToCount((itime) => itime - 1);
        }, 1000);
    };

    // Stop the interval
    const stopInterval = () => {
        if (intervalref.current) {
            window.clearInterval(intervalref.current);
            intervalref.current = null;
        }
    };

    // Use the useEffect hook to cleanup the interval when the component unmounts
    useEffect(() => {
        // here's the cleanup function
        if (time > 0) {
            startInterval();
        }
        return () => {
            if (intervalref.current !== null) {
                window.clearInterval(intervalref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (time > 0 && timeToCount == 0) {
            stopInterval();
            handleOnClose();
        }
    }, [time, timeToCount]);

    const handleOnClose = () => {
        onClose && onClose();
    };

    // Classes
    const classes = ["smpladmin_Popup"];
    const bodyClass =
        type === "message" ? "smpladmin_Popup_Body smpladmin_message" : "smpladmin_Popup_Body";

    // Style
    const componentStyle = style || {};

    return (
        <>
            <div className={classes.join(" ")} style={componentStyle}>
                {children ? children : label}
            </div>

            {visible ? (
                <>
                    <div className={"smpladmin_Reveal"} />
                    <div className={classes.join(" ")} style={componentStyle}>
                        <button className="smpladmin_Popup_CloseButton" onClick={handleOnClose}>
                            &times;
                        </button>
                        {time && time > 0 ? (
                            <div className={"smpladmin_Popup_CloseText"}>
                                Close in {timeToCount}s
                            </div>
                        ) : null}
                        <h1>{label ? label : null}</h1>
                        {hint ? <p className="smpladmin_Popup_Hint">{hint}</p> : null}
                        <div className={bodyClass}>{children ? children : null}</div>
                        {footer ? <div className="smpladmin_Popup_Footer">{footer}</div> : null}
                    </div>
                </>
            ) : null}
        </>
    );
};

export default PopupComponent;
