import React from "react";
import {Button, Card, Flex, Typography} from "antd";
const { Text } = Typography
const imgStyle: React.CSSProperties = {
    display: 'block',
    // width: 212,
    maxHeight: 212,
    objectFit: "cover"
    // overflow: "hidden",
    // height: 272,
    // position: "absolute"
};

export const CardRecook: React.FC<{url: string}> = ({url}) => {
    return (
        <Card
            hoverable
            style={{width: 212, height: 272}}
            styles={{body: { padding: 0, overflow: 'hidden' } }}

        >
            <div style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
            }}>
                <img
                    style={imgStyle}
                    alt="avatar"
                    src={url}
                ></img>
                 {/*убрать это говно и добаить затемнение у фото слева сверху*/}
                <Text strong style={{ paddingLeft:"2%", top: "2%", position: "absolute", color: "white", textShadow: "0.4px 0.4px 0 #000, -0.4px -0.4px 0 #000, 0.4px -0.4px 0 #000, -0.4px 0.4px 0 #000"}}>45мин</Text>
                <Flex style={{top: "80%", position: "absolute"}}>
                    <Button>asdas</Button>
                    <Button>asdas</Button>
                </Flex>
            </div>
            <Flex vertical align="flex-end" justify="space-between" style={{ padding: 10 }}>
                <Text> Хеллоуинское поке с красной икрой </Text>
                {/*<Text> Хеллоуинское поке с красной икрой </Text>*/}
            </Flex>
        </Card>
    )
}