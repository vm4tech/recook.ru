import React, { createContext, useState } from "react";
import {Button, Col, Layout, Row, Space} from "antd";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import DishCard from "../dish/DishCard";
import NewDish from "../dish/NewDish";
import { WhiteColor } from "../../utils/colors";
import { LAYOUT_PADDING } from "../../utils/paddings";
import {useStore} from "../../../hooks/useStore";
import {useSender} from "../../../hooks/useSender";
import {observer} from "mobx-react-lite";
import {chunk} from "../../utils/utils";

const { Sider, Content } = Layout;

const SiderWidth = "30%";

const DishRoute: React.FC = () => {
    const {dishContainer} = useStore()
    const {getAllDishes, dishes, isLoading} = dishContainer;

    const chunked = chunk(dishes, 3);
    const getDishes = useSender(getAllDishes);
    useEffect(() => {
      getDishes();
    }, []);
  return (
    !isLoading ?
      <Layout hasSider style={LAYOUT_PADDING}>
        <Sider
          width={SiderWidth}
          style={{
            ...WhiteColor,
          }}
        >
          {/*<Filter.Dish />*/}
        </Sider>
        <Content style={{ padding: "10px" }}>
          <Row justify={"center"}>
            <Title>Блюда</Title>
          </Row>
          <Space
            direction="vertical"
            size="middle"
            style={{ display: "flex", paddingTop: "20px" }}
          >
            {chunked.map(row =>
              <Row gutter={[16, 16]}>
                {row.map(dish =>
                  <Col span={8} >
                    <DishCard dish={dish} key={dish.id} />
                  </Col>
                )}
              </Row>
            )}
          </Space>
          <NewDish />
        </Content>
      </Layout> : null
  );
};
export default observer(DishRoute);
