import React from "react";
import {Avatar, Flex, Typography} from "antd";
import {IngredientBoxType} from "./IngredientBoxType";

const {Text} = Typography
export const IngredientBox: React.FC<IngredientBoxType> = (
    {
        ingredientImg,
        weightValue,
        name,
        extraInfo,
    }
) => {
    return (
        <Flex align={"center"} justify={"flex-start"} gap={"large"}>
            <Avatar size={56} src={ingredientImg}/>
            <Text style={{width: "20%"}} type={"secondary"}>{weightValue}</Text>
            <Flex style={{width: "50%"}} vertical>
                <Text underline>{name}</Text>
                <Text type={"secondary"} italic>{extraInfo}</Text>
            </Flex>
        </Flex>
    )
}