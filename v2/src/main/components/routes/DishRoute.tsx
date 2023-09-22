import React, { createContext, useState } from "react";
import { Button, Layout, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import DishCard from "../dish/DishCard";
import NewDish from "../dish/NewDish";
import { WhiteColor } from "../../utils/colors";
import { LAYOUT_PADDING } from "../../utils/paddings";
import {useStore} from "../../../hooks/useStore";
import {useSender} from "../../../hooks/useSender";
import {observer} from "mobx-react-lite";

const { Sider, Content } = Layout;

const SiderWidth = "30%";

const DishRoute: React.FC = () => {
    const {dishContainer} = useStore()
    const {getAllDishes, dishes, isLoading} = dishContainer;
    const getDishes = useSender(getAllDishes);
    useEffect(() => {
      getDishes();
    }, []);
  return (
    !isLoading ?
      <Layout hasSider style={LAYOUT_PADDING}>
        {/*<Sider*/}
        {/*  width={SiderWidth}*/}
        {/*  style={{*/}
        {/*    ...WhiteColor,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Filter.Dish />*/}
        {/*</Sider>*/}
        <Content style={{ padding: "10px" }}>
          <Row justify={"center"}>
            <Title>Блюда</Title>
            <NewDish />
          </Row>
          <Space
            direction="vertical"
            size="middle"
            style={{ display: "flex", paddingTop: "20px" }}
          >
            {dishes
              ? dishes.map((dish) => <DishCard dish={dish} key={dish.id} />)
              : null}
          </Space>
        </Content>
      </Layout> : null
  );
};
export default observer(DishRoute);
