import {H2_FONT_SIZE, LIGHT_FONT_SIZE_1} from "../../../utils/Contants";
import {Typography} from "antd";
import React from "react";
import {StickyWrapper} from "./StickyWrapper";
import {StickyType} from "./StickyType";

const {Text} = Typography

export const Sticky: React.FC<StickyType> = (
    {
        style,
        vertical = true,
        gap,
        mainText,
        secondText,
        withDefaultStyle,
        italic = true,
    }
) =>
    <StickyWrapper vertical={vertical} style={style} gap={gap} withDefaultStyle={withDefaultStyle}>
        <Text style={H2_FONT_SIZE}>{mainText}</Text>
        <Text type={"secondary"} italic={italic} style={LIGHT_FONT_SIZE_1}>{secondText}</Text>
    </StickyWrapper>