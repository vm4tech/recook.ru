import React from "react";

import {Card, Col, Flex, Image, Row, Typography, } from "antd";
import {CardRecook} from "../card/CardRecook";

const { Meta } = Card;
const {  Text, Title } = Typography;

export const Main : React.FC = () => {
    return (
            <Row align={"middle"} justify={"center"}>
                <Col flex={"50%"} >
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
                </Col>
                <Col flex={"50%"} className="stars_main_page">
                    <CardRecook />
                    {/*<Flex justify={"center"} align={"center"}>*/}

                    {/*</Flex>*/}
                </Col>
            </Row>
        )
}