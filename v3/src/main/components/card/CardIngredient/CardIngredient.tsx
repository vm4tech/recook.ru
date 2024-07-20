import React from "react";
import {ClockCircleFilled, PlayCircleFilled} from "@ant-design/icons";
import {Button, Card, Flex, Typography, Space} from "antd";
import {RatingStartSvg} from "../CardRecipe/RatingStartSvg";
import {
    BASE_BORDER_RADIUS,
    BASE_BUTTON_STYLE, BASE_PADDING, H2_FONT_SIZE,
    LIGHT_FONT_SIZE_2, MAX_CARD_WIDTH, MAX_IMG_HEIGHT,
    MIN_CARD_WIDTH, MIN_IMG_HEIGHT,
    PADDING_10
} from "../../../utils/Contants";
import {WhiteColor} from "../../../utils/colors";
import {CardIngredientType} from "./CardIngredientType";
import {useNavigate} from "react-router-dom";

const {Text} = Typography
const cardStyle: React.CSSProperties = {
    width: "43vw",
    minWidth: MIN_CARD_WIDTH,
    maxWidth: MAX_CARD_WIDTH,
    ...BASE_BORDER_RADIUS
}

const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: MAX_IMG_HEIGHT,
    minHeight: MIN_IMG_HEIGHT,
    objectFit: "cover",
};
const imgDivBlockStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    ...BASE_BORDER_RADIUS,
}
export const CardIngredient: React.FC<CardIngredientType> = (
    {
        name,
        imgUrl
    }
) => {
    return <Card
        hoverable
        style={cardStyle}
        styles={{body: {padding: 0, overflow: 'hidden'}}}
    >
        <div style={imgDivBlockStyle}>
            <div className="image-shadow">
                <img
                    style={imgStyle}
                    src={imgUrl}
                    alt={name}
                />
            </div>
        </div>

        <Flex align={"center"} justify={"center"} style={BASE_PADDING}>
            <Text> {name} </Text>
        </Flex>

    </Card>
}