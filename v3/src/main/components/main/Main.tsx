import React from "react";

import {Col, Flex, Row, Typography,} from "antd";
import {CardRecook} from "../card/CardRecook";
import {H1_FONT_SIZE} from "../../utils/Contants";

const {Text, Title} = Typography;

export const Main: React.FC = () => {
    return (
        <Row style={{paddingTop: "5%"}} align={"middle"} justify={"space-around"}>
            <Col xl={{flex: '50%'}}>
                {/*Сделать что-то с расположением текста (посеередине 30%)*/}
                <Flex vertical align={"center"} justify={"center"}>
                    <Flex justify={"center"} align={"center"}>
                        <Text
                            style={{fontSize: "300%", textAlign: "center"}}
                        >
                            Готовим вместе с вами
                        </Text>

                    </Flex>
                    <Flex justify={"center"} align={"center"}>
                        <Title
                            style={{...H1_FONT_SIZE, textAlign: "center"}}
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
                xs={{flex: '100%'}}
                sm={{flex: '100%'}}
                md={{flex: '100%'}}
                lg={{flex: '100%'}}
                xl={{flex: '50%'}}
                style={{width: "50%", padding: "1%"}} className="stars_main_page"

            >
                <Row align={"middle"} justify={"space-around"} gutter={[16, 16]}>
                    <Col>
                        <CardRecook
                            isPopular
                            photoUrl="https://balthazar.club/uploads/posts/2023-09/1695454619_balthazar-club-p-belie-tsveti-s-bolshimi-butonami-pinterest-62.jpg"
                            cookTime={33}
                            name="Рыба в с легким салатом"
                            rating={2.4}
                            nowCooking={1}
                        />
                    </Col>
                    <Col>
                        <CardRecook
                            photoUrl="https://i.artfile.ru/2880x1800_1464137_[www.ArtFile.ru].jpg"
                            cookTime={60}
                            name="Люля из человечены в пикантом соусе тартар"
                            rating={4.9}
                            genres={["Вегетарианство", "Сочный бургер"]}
                        />
                    </Col>
                    <Col>
                        <CardRecook
                            isPopular
                            photoUrl="https://static.tildacdn.com/tild6538-6434-4361-b062-396465373661/_bbq.jpg"
                            cookTime={25}
                            name="Хеллоуинское поке с красной икрой"
                            genres={["Жопа с ручкой", "Я фемка"]}
                            rating={3.4}
                            nowCooking={123}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}