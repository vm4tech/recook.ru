import React from "react";
import {RatingStartSvg} from "./RatingStartSvg";
import {Button, Card, Flex, Space, Typography} from "antd";
const { Text } = Typography
const imgStyle: React.CSSProperties = {
    display: 'block',
    maxHeight: 212,
    objectFit: "cover",
    // boxShadow: "inset 0 0 10px 5px rgba(0,0,0,0.5)"
    // borderRadius:"10px"
    // zIndex:"-10"
};

export const CardRecook: React.FC<{url: string}> = ({url}) => {
    return (
        <Card
            hoverable
            style={{width: 212}}
            styles={{body: { padding: 0, overflow: 'hidden' } }}

        >
            <div style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                borderRadius:"10px",

            }}>
                <div className="image-shadow">
                    <img
                        style={imgStyle}
                        alt="avatar"
                        src={url}
                    />
                </div>
                 {/*убрать это говно и добаить затемнение у фото слева сверху*/}
                <Text strong
                      style={{
                          paddingLeft:"5%",
                          top: "5%",
                          position: "absolute",
                          color: "white",
                          textShadow: "rgb(0, 0, 0) 1px 0px 60px, rgb(0, 0, 0) 0px 0px 60px"
                }}
                >
                45мин
                </Text>


            </div>
            <Flex style={{ margin:"-5% 0% 0% 5%", padding:"0% 3% 0% 3%", position: "absolute", backgroundColor:"white", borderRadius:"10px"}}>
                <Space align="center" >
                    <RatingStartSvg/>
                    <Text>4.2/5</Text>
                    {/*<Button>asdas</Button>*/}
                </Space>
            </Flex>
            <Flex vertical align="flex-end" justify="space-between"
                  style={{ padding: 10 }}
            >
                <Text> Хеллоуинское поке с красной икрой </Text>
                <Text> Хеллоуинское поке с красной икрой </Text>

            </Flex>
        </Card>
    )
}