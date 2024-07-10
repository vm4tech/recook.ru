import React from "react";
import {Footer} from "antd/lib/layout/layout";
import {LogoRecook} from "./Logos/Recook/LogoRecook";
import {Col, Divider, Flex, Row, Typography} from "antd";
import {VKLogoButton} from "./Logos/VK/VKLogoButton";
import {TelegramLogoButton} from "./Logos/Telegram/TelegramLogoButton";

const {Text} = Typography
const footerStyle: React.CSSProperties = {
    // textAlign: "center",
    minHeight: "488px",
    backgroundColor: "#191919",
    borderRadius: "48px 48px 0px 0px"
}
const footerExtraLinksStyle: React.CSSProperties = {
    color: "#959595"
}
const footerLargeExtraLinksStyle: React.CSSProperties = {
    cursor: "pointer",
    fontSize: "150%",
    color: "white"
}
const lightGreyColor = "#333333";
const separatorStyle: React.CSSProperties = {
    backgroundColor: lightGreyColor
}

export const FooterRecook: React.FC = () => {
    return (
        <Footer style={footerStyle}>
            <Row align={"middle"}>
                <Col flex={"70%"}>
                    <Flex align={"center"} gap={"small"}>
                        <LogoRecook/>
                        <Text
                            style={{cursor: "pointer", fontSize: "200%", color: "white"}}
                        >
                            РЕКУК
                        </Text>
                    </Flex>
                </Col>
                <Col flex={"30%"}>
                    <Flex justify={"flex-end"} align={"center"} gap={"middle"}>
                        <TelegramLogoButton/>
                        <VKLogoButton/>
                    </Flex>
                </Col>
            </Row>

            <Divider style={separatorStyle}/>
            <Flex wrap gap={"large"}>
                <Flex align={"flex-start"} vertical gap={"small"}>
                    <Text style={footerLargeExtraLinksStyle}>
                        Рецепты
                    </Text>
                    <Text style={footerExtraLinksStyle}>Поиск</Text>
                    <Text style={footerExtraLinksStyle}>Конструктор</Text>
                    <Text style={footerExtraLinksStyle}>Меню на неделю</Text>
                    <Text style={footerExtraLinksStyle}>Личные заметки</Text>
                    <Text style={footerExtraLinksStyle}>Категории</Text>
                </Flex>
                <Flex align={"flex-start"} vertical gap={"small"}>
                    <Text style={{cursor: "pointer", fontSize: "150%", color: "white"}}>
                        Кладовая
                    </Text>
                    <Text style={footerExtraLinksStyle}>Можно приготовить</Text>
                    <Text style={footerExtraLinksStyle}>Лист покупок</Text>
                    <Text style={footerExtraLinksStyle}>Мой продукты</Text>
                    <Text style={footerExtraLinksStyle}>Мои заметки</Text>
                </Flex>
                <Flex align={"flex-start"} vertical gap={"small"}>
                    <Text style={footerLargeExtraLinksStyle}>Блог</Text>
                    <Text style={footerLargeExtraLinksStyle}>Развитие</Text>
                    <Text style={footerLargeExtraLinksStyle}>Поддержка</Text>
                    <Text style={footerLargeExtraLinksStyle}>Монетизация</Text>
                </Flex>
            </Flex>
            <Divider style={separatorStyle}/>
            <Flex wrap gap={"small"}>
                <Flex align={"center"} gap={"small"}>
                    <Text style={{...footerExtraLinksStyle, opacity: "40%"}}>
                        © 2024 Recook. Все права защищены.
                    </Text>
                </Flex>
                <Flex flex={"70%"} align={"center"} gap={"small"}>
                    <Text style={{...footerExtraLinksStyle, opacity: "40%"}}>
                        Мы используем cookies для сбора обезличенных персональных данных.
                        Они помогают настраивать рекламу и анализировать трафик. Оставаясь на сайте, вы соглашаетесь на
                        сбор таких данных.
                    </Text>
                </Flex>
            </Flex>
        </Footer>
    )
}