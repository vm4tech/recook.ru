import React from "react";
import {PlayCircleFilled, ClockCircleFilled, FireFilled, FireOutlined, FireTwoTone} from '@ant-design/icons';
import {RatingStartSvg} from "./RatingStartSvg";
import {Badge, Button, Card, Divider, Flex, Space, Typography} from "antd";
import {blue} from "@ant-design/colors";
import {BASE_BORDER_RADIUS} from "../../utils/Contants";

const {Text} = Typography
const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: 212,
    minHeight: 159,
    objectFit: "cover",
};

const cardStyle: React.CSSProperties = {
    // width: 212,
    width: "30vw",
    minWidth: 159,
    maxWidth: 212,
    borderRadius: BASE_BORDER_RADIUS
    // minHeight: 300,
}

export const CardRecook: React.FC<CardRecookType> = (
    {
        photoUrl,
        cookTime,
        rating = 0,
        avatarUrl,
        nowCooking,
        genre,
        isPopular,
        name
    }
) => {
    const totalTime = () => {
        const minutes = cookTime % 60
        const hours = cookTime / 60
        return hours >= 1 ? `${hours}ч ${minutes}мин` : `${minutes}мин`
    }


    return (
        <Badge.Ribbon text={isPopular ? "Популярно" : null} color={"#F35B04"}>
            <Card
                hoverable
                style={cardStyle}
                styles={{body: {padding: 0, overflow: 'hidden'}}}
            >
                <div style={{
                    position: "relative",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: BASE_BORDER_RADIUS,

                }}>
                    <div className="image-shadow">
                        <img
                            style={imgStyle}
                            src={photoUrl}
                            alt={name}
                        />
                    </div>
                    <Text
                        strong
                        style={{
                            paddingLeft: "5%",
                            top: "5%",
                            position: "absolute",
                            color: "white",
                            textShadow: "rgb(0, 0, 0) 1px 0px 60px, rgb(0, 0, 0) 0px 0px 60px"
                        }}
                    >
                        <ClockCircleFilled/> {totalTime()}
                    </Text>

                </div>

                <Flex style={{
                    margin: "-5% 0% 0% 5%",
                    padding: "0% 3% 0% 3%",
                    position: "absolute",
                    backgroundColor: "white",
                    borderRadius: BASE_BORDER_RADIUS
                }}>
                    <Space align="center">
                        <RatingStartSvg/>
                        <Text>{rating}/5</Text>
                    </Space>
                </Flex>
                <Flex gap={5} vertical align="flex-start"
                      style={{padding: 10}}
                >
                    <Text> {name} </Text>
                    <Flex wrap gap={5}>
                        {nowCooking ?
                            <Button
                                size={"small"} style={{backgroundColor: "#F35B04", borderRadius: BASE_BORDER_RADIUS}}
                                type={"primary"}
                                icon={<PlayCircleFilled/>}
                            >
                                {nowCooking}
                            </Button>
                            : null
                        }

                        {genre ?
                            <Button size={"small"}
                                    style={{backgroundColor: "#000000", borderRadius: BASE_BORDER_RADIUS}}
                                    type={"primary"}>
                                {genre}
                            </Button>
                            : null
                        }
                    </Flex>
                </Flex>

            </Card>
        </Badge.Ribbon>
    )
}