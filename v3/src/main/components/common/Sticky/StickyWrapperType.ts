import React from "react";
import {SizeType} from "antd/es/config-provider/SizeContext";

export type StickyWrapperType = {
    vertical?: boolean,
    style?: React.CSSProperties,
    withDefaultStyle?: boolean,
    gap?: React.CSSProperties['gap'] | SizeType;
}