import React from "react";
import {PlayCircleFilled, ClockCircleFilled, FireFilled, FireOutlined, FireTwoTone} from '@ant-design/icons';
import {RatingStartSvg} from "./RatingStartSvg";
import {Badge, Button, Card, Divider, Flex, Space, Typography} from "antd";
import {blue} from "@ant-design/colors";
import {BASE_BORDER_RADIUS, LIGHT_FONT_SIZE_2, LIGHT_FONT_SIZE_3, PADDING_10} from "../../utils/Contants";
import {useNavigate} from "react-router-dom";
import {BASE_RECOOK_ORANGE_BC, WhiteColor} from "../../utils/colors";
import {Ribbon} from "../common/Ribbon/Ribbon";

const {Text} = Typography

const MIN_CARD_WIDTH = 140;
const MAX_CARD_WIDTH = 212;
const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: MAX_CARD_WIDTH,
    minHeight: MIN_CARD_WIDTH + 30,
    objectFit: "cover",
};
const imgDivBlockStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    ...BASE_BORDER_RADIUS,
}

const cardStyle: React.CSSProperties = {
    width: "43vw",
    minWidth: MIN_CARD_WIDTH,
    maxWidth: MAX_CARD_WIDTH,
    ...BASE_BORDER_RADIUS
}
const ratingStyle: React.CSSProperties = {
    margin: "-5% 0% 0% 5%",
    padding: "0% 3% 0% 3%",
    position: "absolute",
    ...WhiteColor,
    ...BASE_BORDER_RADIUS
}
const cookTimeStyle: React.CSSProperties = {
    paddingLeft: "5%",
    top: "5%",
    position: "absolute",
    color: "white",
    textShadow: "rgb(0, 0, 0) 1px 0px 60px, rgb(0, 0, 0) 0px 0px 60px"
}

const genresButtonStyle = (color = `#${Math.random().toString(16).substr(-6)}`): React.CSSProperties => {
    return {
        backgroundColor: color,
        fontSize: "85%",
        ...BASE_BORDER_RADIUS
    }

}
const nowCookingStyle: React.CSSProperties = {...BASE_RECOOK_ORANGE_BC, ...BASE_BORDER_RADIUS}

/** TODO: Сделать предпросмотр */
export const CardRecook: React.FC<CardRecookType> = (
    {
        id = "76e46497-3182-4d37-a296-8c67be3411f3",
        photoUrl,
        cookTime,
        rating = 0,
        avatarUrl,
        nowCooking,
        genres,
        isPopular,
        name
    }
) => {
    const navigate = useNavigate()
    const substringName = (name: String): String => {
        let maxLength = 38;
        return name.length > maxLength
            ? name.substring(0, maxLength - 3) + "..."
            : name
    }
    return (
        <Ribbon isPopular={isPopular}>
            <Card
                onClick={() => navigate(`/recipe/${id}`)}
                hoverable
                style={cardStyle}
                styles={{body: {padding: 0, overflow: 'hidden'}}}
            >
                <div style={imgDivBlockStyle}>
                    <div className="image-shadow">
                        <img
                            style={imgStyle}
                            src={photoUrl}
                            alt={name}
                        />
                    </div>
                    <Text strong style={cookTimeStyle}>
                        <ClockCircleFilled/> {cookTime.toTotalTime()}
                    </Text>

                </div>

                <Flex align={"center"} style={ratingStyle}>
                    <Space>
                        <RatingStartSvg/>
                        <Text>{rating}/5</Text>
                    </Space>
                </Flex>
                <Flex gap={5} vertical align="flex-start" style={PADDING_10}>
                    <Text style={LIGHT_FONT_SIZE_2}> {substringName(name)} </Text>
                    <Flex wrap gap={5}>
                        {nowCooking ?
                            <Button size={"small"} style={nowCookingStyle} type={"primary"} icon={<PlayCircleFilled/>}>
                                {nowCooking}
                            </Button> : null
                        }

                        {genres?.map(genre =>
                            <Button size={"small"} style={genresButtonStyle()} type={"primary"}>
                                {genre}
                            </Button>
                        )}
                    </Flex>

                </Flex>

            </Card>
        </Ribbon>
    )
}