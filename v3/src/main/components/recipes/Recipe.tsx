import React from "react";
import {Avatar, Col, Flex, Row, Typography} from "antd";
import {StickyWrapper} from "../common/Sticky/StickyWrapper";
import {
    H2_FONT_SIZE,
    H3_FONT_SIZE, LIGHT_FONT_SIZE_1,
} from "../../utils/Contants";
import {Wrapper} from "../common/Wrapper";
import {Sticky} from "../common/Sticky/Sticky";

const {Text} = Typography;
const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: 250,
    width: "100vw",
    objectFit: "cover",
};
export const Recipe: React.FC = () => {
    const photoUrl = "https://balthazar.club/uploads/posts/2023-09/1695454619_balthazar-club-p-belie-tsveti-s-bolshimi-butonami-pinterest-62.jpg"
    const avatarUrl = "https://camo-v3.shikimori.one/013d1958fee814ba2c51b7c1219402867ac334db?url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2023%2F06%2F27%2F4444438%2F32c8ca9d33613d78313fbe14cd596724.jpg"
    const cookTime = 120
    return (
        <>
            <img
                style={imgStyle}
                src={photoUrl}
                alt={"asdasd"}
            />
            <Wrapper>
                <Row gutter={[16, 16]}>
                    <Col xs={{flex: "100%"}}
                         lg={{flex: "40%"}}
                         xl={{flex: "40%"}}
                    >
                        <Flex gap={"middle"} vertical>
                            <StickyWrapper>
                                <Text style={H2_FONT_SIZE}>Люля из человечины в панировке с соусом тартар </Text>
                            </StickyWrapper>
                            <StickyWrapper gap={"large"}>
                                <Sticky withDefaultStyle={false} mainText={cookTime.toTotalTime()}
                                        secondText={"Общее время"}/>
                                <Sticky withDefaultStyle={false} mainText={"1/3"} secondText={"Сложность"}/>
                                <Sticky withDefaultStyle={false} mainText={"30 мин"} secondText={"Активное время"}/>
                            </StickyWrapper>
                            <StickyWrapper gap={"large"}>
                                <Flex wrap gap={"middle"} vertical>
                                    <Flex wrap align={"center"} gap={"small"}>
                                        <Avatar size={56} src={avatarUrl}/>
                                        <Flex wrap vertical>
                                            <Text style={H3_FONT_SIZE}>vm4tech mujlax</Text>
                                            <Text type={"secondary"} style={LIGHT_FONT_SIZE_1}>Заебаные
                                                разработчики</Text>
                                        </Flex>
                                    </Flex>
                                    <Text type={"secondary"}>Я, как каннибалка, каждый день превращаю обычные продукты в
                                        кулинарные шедевры. Моё искусство не просто кормит людей, но и создаёт атмосферу
                                        уюта и праздника. </Text>
                                </Flex>
                            </StickyWrapper>
                        </Flex>
                    </Col>
                    <Col
                        lg={{flex: "60%"}}
                        xl={{flex: "60%"}}
                    >
                        <Flex wrap gap={"middle"}>
                            <Sticky mainText={"999"} secondText={"Шагов"}/>
                            <Sticky mainText={"09.07.2024"} secondText={"Дата"}/>
                            <Sticky mainText={"1/3"} secondText={"Острота"}/>
                            <Sticky mainText={"Бомжатская"} secondText={"Кухня"}/>
                        </Flex>
                    </Col>
                </Row>
            </Wrapper>
        </>
    )
}