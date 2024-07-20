import {StickyWrapperType} from "./StickyWrapperType";

export type StickyType = BaseStickyType & StickyWrapperType

type BaseStickyType = {
    mainText: string,
    secondText?: string
    italic?: boolean
}