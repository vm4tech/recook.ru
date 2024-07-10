import {WhiteColor} from "./colors";

export const BASE_BORDER_RADIUS = {borderRadius: 20};
export const BASE_PADDING = {padding: 20}
export const PADDING_10 = {padding: 10}
export const H1_FONT_SIZE = {fontSize: "200%"}
export const H2_FONT_SIZE = {fontSize: "175%"}
export const H3_FONT_SIZE = {fontSize: "150%"}

export const LIGHT_FONT_SIZE_1 = {fontSize: "90%"}
export const LIGHT_FONT_SIZE_2 = {fontSize: "85%"}
export const LIGHT_FONT_SIZE_3 = {fontSize: "80%"}
// export const SMALL
export const BASE_NOTE_STYLE = {...WhiteColor, ...BASE_PADDING, ...BASE_BORDER_RADIUS}
export const BASE_H2_NOTE_STYLE = {...WhiteColor, ...BASE_PADDING, ...BASE_BORDER_RADIUS, ...H2_FONT_SIZE}
