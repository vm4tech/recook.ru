import React, {useState} from "react";
import {Avatar, Col, Divider, Flex, Row, Switch, Typography} from "antd";
import {StickyWrapper} from "../../common/Sticky/StickyWrapper";
import {
    BASE_BORDER_RADIUS,
    H2_FONT_SIZE,
    H3_FONT_SIZE, LIGHT_FONT_SIZE_1, LIGHT_FONT_SIZE_2, PADDING_10,
} from "../../../utils/Contants";
import {Wrapper} from "../../common/Wrapper";
import {Sticky} from "../../common/Sticky/Sticky";
import {IngredientBox} from "./IngredientBox/IngredientBox";

const {Text, Paragraph} = Typography;
const imgStyle: React.CSSProperties = {
    display: 'block',
    height: "30vw",
    maxHeight: 250,
    width: "99vw",
    objectFit: "cover",
    borderRadius: "0 0 20px 20px"
};
export const Recipe: React.FC = () => {
    const photoUrl = "https://balthazar.club/uploads/posts/2023-09/1695454619_balthazar-club-p-belie-tsveti-s-bolshimi-butonami-pinterest-62.jpg"
    const avatarUrl = "https://camo-v3.shikimori.one/013d1958fee814ba2c51b7c1219402867ac334db?url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2023%2F06%2F27%2F4444438%2F32c8ca9d33613d78313fbe14cd596724.jpg"
    const cookTime = 120
    const [ellipsis, setEllipsis] = useState(true);
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
                            <Sticky mainText={"999"} secondText={"Шагов"}/>
                            <Sticky mainText={"09.07.2024"} secondText={"Дата"}/>
                            <Sticky mainText={"1/3"} secondText={"Острота"}/>
                            <Sticky mainText={"Бомжатская"} secondText={"Кухня"}/>
                            <StickyWrapper vertical gap={"small"}>
                                <StickyWrapper withDefaultStyle={false} gap={"small"}>
                                    <Sticky withDefaultStyle={false} mainText={"Соус"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} mainText={"Человечина"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} mainText={"Сухари"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} mainText={"Чеснок"}/>
                                </StickyWrapper>
                                <Text type={"secondary"} italic style={LIGHT_FONT_SIZE_1}>Аллергенные ингредиенты</Text>
                            </StickyWrapper>
                            <StickyWrapper vertical gap={"small"}>
                                <Text type={"secondary"} italic style={LIGHT_FONT_SIZE_1}>на 100 грамм сырого
                                    продукта на 1 порцию</Text>
                                <StickyWrapper withDefaultStyle={false} gap={"small"}>
                                    <Sticky withDefaultStyle={false} italic={false} mainText={"560"}
                                            secondText={"ККал"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} italic={false} mainText={"30"}
                                            secondText={"Белки"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} italic={false} mainText={"40"}
                                            secondText={"Жиры"}/>
                                    <Divider type={"vertical"}/>
                                    <Sticky withDefaultStyle={false} italic={false} mainText={"60"}
                                            secondText={"Углеводы"}/>
                                </StickyWrapper>
                            </StickyWrapper>
                        </Flex>
                    </Col>
                </Row>
                <Row style={PADDING_10} gutter={[16, 16]}>
                    <Flex gap={"middle"} vertical>
                        <Paragraph
                            type={"secondary"}
                            ellipsis={{
                                expandable: true,
                                symbol: "раскрыть"
                            }}
                        >
                            Мир - это сказочная мозаика, в которой Ганнибал Лектер создает несравненное произведение
                            искусства - люлю из человечины. Восхищая своими кулинарными навыками, он превращает отборные
                            кишки и переплетенные кости в изысканное блюдо. Каждый кусочек окутан соусом тартар, который
                            придает мясу нежность и таинственную пикантность. Каждая вилка, каждый вкусовой поцелуй,
                            становится незабываемым путешествием по вкусовым нотам, воплощающим в себе искусство и
                            кулинарную магию Ганнибала. Насладитесь этим уникальным блюдом и почувствуйте мир, который
                            невозможно забыть.
                        </Paragraph>
                    </Flex>
                </Row>

                <Divider> <Text style={H2_FONT_SIZE}>Ингредиенты</Text></Divider>
                <Flex wrap gap={"large"}>
                    <Flex justify={"flex-start"} vertical>
                        <Divider orientation={"left"}> Основа</Divider>
                        <StickyWrapper align={""} vertical>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"400 гр"} name={"Мясо врага"}
                                           extraInfo={"вырезка"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"100 гр"} name={"Кишки кота"}
                                           extraInfo={"молодого"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"по вкусу"} name={"Говно"}
                                           extraInfo={"любое"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"1 шт"} name={"Лук"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"100 гр"} name={"Лаваш"}
                                           extraInfo={"сырный, обычный, томатный"}/>
                        </StickyWrapper>
                    </Flex>
                    <Flex justify={"flex-start"} vertical>
                        <Divider orientation={"left"}>Соус</Divider>
                        <StickyWrapper justify={"flex-start"} align={""} vertical>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 ложки"}
                                           name={"Майонез провонсаль"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"300 гр"} name={"Сметана"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"1 шт"} name={"Чеснок"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 шт"} name={"Перетертые кости"}/>
                        </StickyWrapper>
                    </Flex>
                    <Flex justify={"flex-start"} vertical>
                        <Divider orientation={"left"}>По вкусу</Divider>
                        <StickyWrapper justify={"flex-start"} align={""} vertical>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 ложки"}
                                           name={"Майонез провонсаль"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"300 гр"} name={"Сметана"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"1 шт"} name={"Чеснок"}/>
                            <Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 шт"}
                                           name={"Перетертые кости"}/><Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 шт"}
                                           name={"Перетертые кости"}/><Divider/>
                            <IngredientBox ingredientImg={avatarUrl} weightValue={"2 шт"} name={"Перетертые кости"}/>
                        </StickyWrapper>
                    </Flex>
                </Flex>

            </Wrapper>
        </>
    )
}