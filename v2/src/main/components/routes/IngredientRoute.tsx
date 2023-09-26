import React from "react";
import {Col, FloatButton, Layout, Row, Space} from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState, createContext } from "react";
import NewIngredient from "../ingredient/NewIngredient";
import { LAYOUT_PADDING } from "../../utils/paddings";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import IngredientCard from "../ingredient/IngredientCard";
import {chunk} from "../../utils/utils";

const { Sider, Content } = Layout;

const IngredientRoute: React.FC = () => {
  const SiderWidth = "30%";
  const { ingredientContainer } = useStore();
  const {isLoading, ingredients} = ingredientContainer;
  const chunked = chunk(ingredients);
  useEffect(() => {
    ingredientContainer.getAllIngredients();
  }, []);
  return (
    <Layout hasSider style={LAYOUT_PADDING}>
      {/*<Sider*/}
      {/*  width={SiderWidth}*/}
      {/*  style={{*/}
      {/*    ...WhiteColor,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  /!*<Filter.Ingredient />*!/*/}
      {/*</Sider>*/}
      <Content style={{ padding: "10px" }}>
        <Row justify={"center"}>
          <Title>Ингредиенты</Title>
        </Row>
        <Space
          direction="vertical"
          size="middle"
          style={{ display: "flex", paddingTop: "20px" }}
        >
          {chunked.map(row =>
            <Row gutter={[16, 16]}>
              {row.map(ingredient =>
                <Col span={8} >
                  <IngredientCard ingredient={ingredient} key={ingredient.id} />
                </Col>
              )}
            </Row>
          )}
        </Space>
        <NewIngredient/>
      </Content>
    </Layout>
  );
};
export default observer(IngredientRoute);
