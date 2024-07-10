import React from "react";
import {Flex} from "antd";
import {StickyWrapperType} from "./StickyWrapperType";
import {BASE_NOTE_STYLE} from "../../../utils/Contants";

/**
 * Обертка для отображения информации в специальном заполненном блоке
 **/
export const StickyWrapper: React.FC<React.PropsWithChildren<StickyWrapperType>> = (
    {
        children,
        style,
        vertical = false,
        gap,
        withDefaultStyle = true
    }
) => {
    const defaultStyle = withDefaultStyle ? BASE_NOTE_STYLE : {}
    return (
        <Flex wrap justify={"center"} align={"center"} vertical={vertical} gap={gap}
              style={{...defaultStyle, ...style}}>
            {children}
        </Flex>
    )
}