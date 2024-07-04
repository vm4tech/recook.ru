import React from "react";

import {Card, Col, Flex, Image, Row, Typography, } from "antd";
import {CardRecook} from "../card/CardRecook";

const { Meta } = Card;
const {  Text, Title } = Typography;

export const Main : React.FC = () => {
    return (
            <Row style={{paddingTop:"5%"}} align={"middle"} justify={"space-around"}>
                <Col xl={{ flex: '50%' }}>
                    {/*Сделать что-то с расположением текста (посеередине 30%)*/}
                    <Flex vertical align={"center"} justify={"center"}>
                        <Flex justify={"center"} align={"center"}>
                            <Text
                                style={{ fontSize: "300%", textAlign: "center"}}
                            >
                                Готовим вместе с вами
                            </Text>

                        </Flex>
                        <Flex justify={"center"} align={"center"}>
                            <Title
                                style={{ fontSize: "200%", textAlign: "center" }}
                            >
                                Находим рецепты по вашим предпочтениям,
                                интерактивно готовим
                                в нашем тренажере
                                и делимся эмоциями
                                во время готовки!
                            </Title>
                        </Flex>
                    </Flex>
                </Col>
                <Col
                    xs={{ flex: '100%' }}
                    sm={{ flex: '100%' }}
                    md={{ flex: '100%' }}
                    lg={{ flex: '100%' }}
                    xl={{ flex: '50%' }}
                    style={{width:"50%"}} className="stars_main_page">

                        <Col offset={14}>
                            <CardRecook
                                url="https://balthazar.club/uploads/posts/2023-09/1695454619_balthazar-club-p-belie-tsveti-s-bolshimi-butonami-pinterest-62.jpg"
                            />
                        </Col>
                        <Col style={{marginTop:"-20%"}} offset={3}>
                            <CardRecook url="https://i.artfile.ru/2880x1800_1464137_[www.ArtFile.ru].jpg" />
                        </Col>
                        <Col style={{marginTop:"-20%"}} offset={11}>
                            <CardRecook url="https://static.tildacdn.com/tild6538-6434-4361-b062-396465373661/_bbq.jpg" />
                        </Col>

                </Col>
            </Row>
        )
}