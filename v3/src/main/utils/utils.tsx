import React from "react";

import {MenuProps} from "antd";
import {RcFile} from "antd/es/upload";


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

export const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
export const delay = async (ms: number) => {
    console.warn("_delay:start:ms:", ms, Date.now());
    const prom = await new Promise((r) => setTimeout(r, ms));
    console.warn("_delay:finish:ms:", ms, Date.now());
    return prom;
};