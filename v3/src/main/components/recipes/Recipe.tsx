import React from "react";
import {Avatar, Col, Flex, Row, Typography} from "antd";
import {Wrapper} from "../Wrapper";
import {AntDesignOutlined} from '@ant-design/icons';
import {BASE_BORDER_RADIUS} from "../../utils/Contants";

const {Text} = Typography;
const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: 250,
    width: "100vw",
    // minHeight: 159,
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
                            <Text style={{
                                fontSize: "175%",
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: BASE_BORDER_RADIUS
                            }}>Люля из человечины в панировке с соусом тартар </Text>

                            <Flex wrap style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: BASE_BORDER_RADIUS
                            }} justify={"center"} gap={"large"}>
                                <Flex align={"center"} vertical>
                                    <Text style={{fontSize: "150%"}}>{cookTime.toTotalTime()}</Text>
                                    <Text type={"secondary"}>Общее время</Text>
                                </Flex>
                                <Flex align={"center"} vertical>
                                    <Text style={{fontSize: "150%"}}>1/3</Text>
                                    <Text type={"secondary"}>сложность</Text>
                                </Flex>
                                <Flex align={"center"} vertical>
                                    <Text style={{fontSize: "150%"}}>30 мин</Text>
                                    <Text type={"secondary"}>Активное время</Text>
                                </Flex>
                            </Flex>
                            <Flex wrap style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: BASE_BORDER_RADIUS
                            }} gap={"large"}>
                                <Flex wrap gap={"middle"} vertical>
                                    <Flex wrap align={"center"} gap={"small"}>
                                        <Avatar
                                            size={56}
                                            src={avatarUrl}
                                        />
                                        <Flex wrap vertical>
                                            <Text style={{fontSize: "150%"}}>vm4tech mujlax</Text>
                                            <Text type={"secondary"} style={{fontSize: "90%"}}>Заебаные
                                                разработчики</Text>
                                        </Flex>
                                    </Flex>
                                    <Text type={"secondary"}>Я, как каннибалка, каждый день превращаю обычные продукты в
                                        кулинарные шедевры. Моё искусство не просто кормит людей, но и создаёт атмосферу
                                        уюта и праздника. </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col
                        xs={{flex: "100%"}}
                        lg={{flex: "60%"}}
                        xl={{flex: "60%"}}
                    >
                        <Flex wrap gap={"middle"}>
                            <Flex wrap align={"center"} vertical style={{
                                backgroundColor: "white",
                                padding: 20,
                                // maxWidth: 300,
                                borderRadius: BASE_BORDER_RADIUS
                            }}>
                                <Text style={{fontSize: "150%"}}>999</Text>
                                <Text type={"secondary"} italic style={{fontSize: "90%"}}>Шагов</Text>
                            </Flex>
                            <Flex wrap align={"center"} vertical style={{
                                backgroundColor: "white",
                                padding: 20,
                                // maxWidth: 300,
                                borderRadius: BASE_BORDER_RADIUS
                            }}>
                                <Text style={{fontSize: "150%"}}>09.07.2024</Text>
                                <Text type={"secondary"} italic style={{fontSize: "90%"}}>Дата</Text>
                            </Flex>
                            <Flex wrap align={"center"} vertical style={{
                                backgroundColor: "white",
                                padding: 20,
                                // maxWidth: 300,
                                borderRadius: BASE_BORDER_RADIUS
                            }}>
                                <Text style={{fontSize: "150%"}}>1/3</Text>
                                <Text type={"secondary"} italic style={{fontSize: "90%"}}>Острота</Text>
                            </Flex>
                            <Flex wrap align={"center"} vertical style={{
                                backgroundColor: "white",
                                padding: 20,
                                // maxWidth: 300,
                                borderRadius: BASE_BORDER_RADIUS
                            }}>
                                <Text style={{fontSize: "150%"}}>Бомжатская</Text>
                                <Text type={"secondary"} style={{fontSize: "90%"}} italic>Кухня</Text>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Wrapper>
        </>

    )
}