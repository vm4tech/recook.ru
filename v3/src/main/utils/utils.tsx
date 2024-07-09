import React from "react";

import {MenuProps} from "antd";


export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

function toTotalTime(this: number): string {
    const minutes = this % 60
    const hours = this / 60
    return hours >= 1 ? `${hours}ч ${minutes}мин` : `${minutes}мин`
}

// Declare the Extension
declare global {
    interface Number {
        toTotalTime(): string;
    }
}

Number.prototype.toTotalTime = toTotalTime