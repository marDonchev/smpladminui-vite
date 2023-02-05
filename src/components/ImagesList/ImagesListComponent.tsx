import "./ImagesListComponent.scss";

import { CSSProperties, MouseEvent, useState } from "react";

interface IImagesListElement {
    url: string;
    extra?: string;
    secondary?: string;
    itemStyle?: CSSProperties;
    borderColor: string;
    selected: boolean;
    onSelect?: (event: MouseEvent<HTMLDivElement>) => void | null;
    itemSecondaryKey?: string;
    imageOnly?: boolean;
}

const ImagesListElement = ({
    url,
    extra,
    secondary,
    itemStyle,
    borderColor,
    selected,
    onSelect,
    imageOnly,
}: IImagesListElement) => (
    <div
        style={{
            ...itemStyle,
            ...{
                backgroundImage: `url(${url})`,
                borderColor,
            },
        }}
        className={selected ? "smpladmin_selected" : undefined}
        onClick={(e) => onSelect && onSelect(e)}
    >
        {!imageOnly && (
            <>
                <span>{extra && extra}</span>
                {secondary && <span>{secondary}</span>}
            </>
        )}
    </div>
);

interface IImagesListMediaOption {
    url: string;
    key: string;
    extra: string;
    name: string;
}
export interface IImagesListComponent {
    list: IImagesListMediaOption[];
    style?: CSSProperties;
    disabled?: boolean;
    borderColor?: string;
    max?: number | null;
    itemStyle?: CSSProperties;
    selectable?: boolean;
    limitSelection?: number | null;
    itemUrlKey?: string;
    itemExtraKey?: string;
    itemSecondaryKey?: string;
    onSelect?: (selected: string[]) => void;
    selected: string[];
}

export const ImagesListComponent = ({
    list = [],
    disabled = false,
    style = {},
    borderColor = "white",
    max = null,
    limitSelection = null,
    itemStyle = undefined,
    selectable = false,
    itemUrlKey = "url",
    itemExtraKey = "name",
    itemSecondaryKey = undefined,
    onSelect,
    selected = [],
}: IImagesListComponent) => {
    const [iSelected, setISelected] = useState<string[]>(selected);

    // Classes
    const classes = [
        "smpladmin_ImagesList",
        ...[max && "smpladmin_compact"],
        ...[disabled && "smpladmin_disabled"],
        ...[selectable && "smpladmin_selectable"],
    ];

    // Style
    const componentStyle = style || {};

    // const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    //     if (onClick) onClick(event);
    // }

    const handleSelect = (sel: string) => {
        if (selectable) {
            let selectedList = [...iSelected];
            selectedList = selectedList.includes(sel)
                ? selectedList.filter((s) => s !== sel)
                : [...selectedList, sel];
            setISelected((slist) =>
                slist.includes(sel) ? slist.filter((s) => s !== sel) : [...slist, sel],
            );

            if (limitSelection && limitSelection > 0 && selectedList.length > limitSelection) {
                selectedList = selectedList.slice(selectedList.length - limitSelection);
            }

            setISelected(selectedList);

            onSelect && onSelect(selectedList);
        }
    };

    return (
        <div className={classes.join(" ")} style={componentStyle}>
            {max && max < list.length && <div className="smpladmin_ImagesList_ext">...</div>}

            {list
                .slice(0, max ? max : list.length)
                .map((media: IImagesListMediaOption, mediaIndex: number) => (
                    <ImagesListElement
                        key={mediaIndex}
                        url={media[itemUrlKey as keyof typeof media]}
                        extra={media[itemExtraKey as keyof typeof media]}
                        secondary={media[itemSecondaryKey as keyof typeof media]}
                        itemStyle={itemStyle || undefined}
                        borderColor={borderColor}
                        selected={iSelected.includes(media[itemUrlKey as keyof typeof media])}
                        onSelect={() => handleSelect(media[itemUrlKey as keyof typeof media])}
                        imageOnly={!!max}
                    />
                ))}
        </div>
    );
};

export default ImagesListComponent;
