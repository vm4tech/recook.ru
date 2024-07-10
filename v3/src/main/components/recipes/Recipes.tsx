import React, {useEffect, useState} from "react";
import {Button, Col, Collapse, Divider, Flex, Layout, Menu, MenuProps, Row, Typography} from "antd";
import {Wrapper} from "../Wrapper";
import {MailOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";
import {BASE_BORDER_RADIUS} from "../../utils/Contants";
import {MenuItem} from "../../utils/utils";
import {CardRecook} from "../card/CardRecook";

const {Text} = Typography
// const {Sider, Content} = Layout
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
        <Row style={{padding: "20px"}}>
            <Col flex={"30%"} style={{
                display: isDisplayNone ? "none" : "block"
            }}>
                <Flex vertical gap={"small"}>
                    <Text style={{fontSize: "200%"}}>Популярные фильтры</Text>
                    <Divider/>
                    <Menu
                        style={{borderRadius: BASE_BORDER_RADIUS}}
                        theme={"light"}
                        mode="inline"
                        items={items}
                    />
                    <Col style={{padding: 10, backgroundColor: "white", borderRadius: BASE_BORDER_RADIUS}}>
                        <Text style={{fontSize: "200%"}}>Дополнительная информация</Text>
                        <br/>
                        <Text>А почему так?</Text>
                    </Col>
                </Flex>
            </Col>
            <Col flex={isDisplayNone ? "100%" : "70%"}>
                <Flex wrap gap={"large"} style={{padding: "10px"}}>
                    <Flex
                        wrap gap={"small"}
                        style={{backgroundColor: "white", padding: "20px", borderRadius: BASE_BORDER_RADIUS}}
                    >
                        <Divider orientation={"left"}> Лучшие рецепты по рейтингу </Divider>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Всем"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Привет"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"Меня"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"зовут"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"vm4tech"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"это"}/>
                        <CardRecook photoUrl={url} cookTime={1} rating={5} name={"recook!"}/>
                    </Flex>
                    <Flex wrap gap={"small"}
                          style={{backgroundColor: "white", padding: "20px", borderRadius: BASE_BORDER_RADIUS}}>
                        <Divider orientation={"left"}> Популярные рецепты </Divider>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Всем"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"Привет"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"это"} isPopular/>
                        <CardRecook photoUrl={url} cookTime={20} rating={4.3} name={"recook!"} isPopular/>
                    </Flex>
                    <Flex wrap gap={"small"}
                          style={{backgroundColor: "white", padding: "20px", borderRadius: BASE_BORDER_RADIUS}}>
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
