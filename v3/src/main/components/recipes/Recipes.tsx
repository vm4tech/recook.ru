import React, {useEffect, useState} from "react";
import {Col, Divider, Flex, Menu, Row, Typography} from "antd";
import {MailOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";
import {BASE_BORDER_RADIUS, BASE_NOTE_STYLE, BASE_PADDING, H1_FONT_SIZE} from "../../utils/Contants";
import {MenuItem} from "../../utils/utils";
import {CardRecook} from "../card/CardRecook";

const {Text} = Typography
const items: MenuItem[] = [
    {
        key: '1',
        icon: <MailOutlined/>,
        label: 'Тип рецепта',
        children: [
            {key: '11', label: 'ПП'},
            {key: '12', label: 'ЗОЖ'},
            {key: '13', label: 'Феминизм'},
            {key: '14', label: 'Вегетарианство'},
            {key: '15', label: 'Для похудения'},
        ],
    },
    {
        key: '2',
        icon: <AppstoreOutlined/>,
        label: 'Сортировка',
        children: [
            {key: '21', label: 'Option 1'},
            {key: '22', label: 'Option 2'},
            {
                key: '23',
                label: 'Submenu',
                children: [
                    {key: '231', label: 'Option 1'},
                    {key: '232', label: 'Option 2'},
                    {key: '233', label: 'Option 3'},
                ],
            },
            {
                key: '24',
                label: 'Submenu 2',
                children: [
                    {key: '241', label: 'Option 1'},
                    {key: '242', label: 'Option 2'},
                    {key: '243', label: 'Option 3'},
                ],
            },
        ],
    },
    {
        key: '3',
        icon: <SettingOutlined/>,
        label: 'Navigation Three',
        children: [
            {key: '31', label: 'Option 1'},
            {key: '32', label: 'Option 2'},
            {key: '33', label: 'Option 3'},
            {key: '34', label: 'Option 4'},
        ],
    },
];
const url = "https://balthazar.club/uploads/posts/2023-09/1695454619_balthazar-club-p-belie-tsveti-s-bolshimi-butonami-pinterest-62.jpg";
export const Recipes: React.FC = () => {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth)
    const isDisplayNone = displayWidth < 1200
    const handleResize = () => {
        setDisplayWidth(window.innerWidth)
    }

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
                <Flex vertical gap={"small"}>
                    <Text style={H1_FONT_SIZE}>Популярные фильтры</Text>
                    <Divider/>
                    <Menu
                        style={BASE_BORDER_RADIUS}
                        theme={"light"}
                        mode="inline"
                        items={items}
                    />
                    <Col style={BASE_NOTE_STYLE}>
                        <Text style={H1_FONT_SIZE}>Дополнительная информация</Text>
                        <br/>
                        <Text>А почему так?</Text>
                    </Col>
                </Flex>
            </Col>
            <Col flex={isDisplayNone ? "100%" : "70%"}>
                <Flex wrap gap={"large"} style={isDisplayNone ? {} : BASE_PADDING}>
                    <Flex wrap gap={"small"} style={BASE_NOTE_STYLE}>
                        <Divider orientation={"left"}> Лучшие рецепты по рейтингу </Divider>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Всем"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Привет"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Меня"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"зовут"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"vm4tech"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"это"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"recook!"}/>
                    </Flex>
                    <Flex wrap gap={"small"} style={BASE_NOTE_STYLE}>
                        <Divider orientation={"left"}> Популярные рецепты </Divider>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Всем"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Привет"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"это"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"recook!"} isPopular/>
                    </Flex>
                    <Flex wrap gap={"small"} style={BASE_NOTE_STYLE}>
                        <Divider orientation={"left"}> Сейчас готовят </Divider>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Всем"} nowCooking={222}/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Привет"} nowCooking={44}/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"это"} nowCooking={1}/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"recook!"} nowCooking={324}/>
                    </Flex>

                </Flex>
            </Col>
        </Row>
    )
}
