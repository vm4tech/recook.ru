import React from "react";
import {Badge} from "antd";

export const Ribbon: React.FC<React.PropsWithChildren<{ isPopular?: Boolean }>> = (
    {children, isPopular}
) => {
    return isPopular ?
        <Badge.Ribbon text={isPopular ? "Хит" : null} color={"#F35B04"}>
            {children}
        </Badge.Ribbon>
        : children
}