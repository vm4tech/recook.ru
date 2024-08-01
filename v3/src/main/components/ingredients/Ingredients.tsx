import React, {useEffect, useState} from "react";
import {Button, Col, Divider, Flex, Menu, Row, Typography} from "antd";
import {
    BASE_BORDER_RADIUS,
    BASE_BUTTON_STYLE,
    BASE_NOTE_STYLE,
    BASE_PADDING,
    H1_FONT_SIZE,
    H2_FONT_SIZE, H3_FONT_SIZE
} from "../../utils/Contants";
import {CardRecipe} from "../card/CardRecipe/CardRecipe";
import {StickyWrapper} from "../common/Sticky/StickyWrapper";
import {WhiteColor} from "../../utils/colors";
import {CardIngredient} from "../card/CardIngredient/CardIngredient";
import {useNavigate} from "react-router-dom";

const {Text} = Typography
const mashroomUrl = "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-14/329/517/237/118/32/100028814519b0.jpg";
const cheeseUrl = "https://storage.yandexcloud.net/recook/cheese-cheese.jpg";
export const Ingredients: React.FC = () => {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth)
    const isDisplayNone = displayWidth < 1200
    const handleResize = () => {
        setDisplayWidth(window.innerWidth)
    }
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <Row style={BASE_PADDING}>
            <Col flex={"30%"} style={{
                display: isDisplayNone ? "none" : "block"
            }}>
                <StickyWrapper gap={"small"}>
                    <Text style={H2_FONT_SIZE}>Добавьте ингредиенты</Text>
                    <Text type={"secondary"}>Выберите ингредиенты которые есть у вас дома, чтобы получить
                        рецепты</Text>

                    <Button onClick={() => navigate(`/ingredient/create`)} style={BASE_BUTTON_STYLE} type={"primary"}
                            block> Добавить
                        ингредиенты
                    </Button>
                </StickyWrapper>

            </Col>
            <Col flex={isDisplayNone ? "100%" : "70%"}>
                <Flex wrap gap={"large"} style={isDisplayNone ? {} : BASE_PADDING}>
                    <Flex wrap gap={"small"} style={isDisplayNone ? {} : BASE_NOTE_STYLE}>
                        <Divider orientation={"left"}>Все ингредиенты</Divider>
                        <CardIngredient imgUrl={mashroomUrl} name={"Шампиньоны"}/>
                        <CardIngredient imgUrl={cheeseUrl} name={"Сыр с дырочками"}/>
                        <CardIngredient imgUrl={mashroomUrl} name={"Грибы"}/>
                        <CardIngredient imgUrl={cheeseUrl} name={"Сыр"}/>
                        <CardIngredient imgUrl={mashroomUrl} name={"vm4tech"}/>
                        <CardIngredient imgUrl={cheeseUrl} name={"Опять сыр"}/>
                        <CardIngredient imgUrl={mashroomUrl} name={"Опять грибы"}/>
                    </Flex>


                </Flex>
            </Col>
        </Row>
    )
}
