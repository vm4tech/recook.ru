import React from "react";
import { Layout, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState, createContext } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import IngredientCard from "../ingredient/IngredientCard";
import NewIngredient from "../ingredient/NewIngredient";
import { WhiteColor } from "../../utils/colors";
import FilterIngredient from "../filter/FilterIngredient";
import Filter from "../filter/Filter";
import { LAYOUT_PADDING } from "../../utils/paddings";

const { Sider, Content } = Layout;

export const UpdateIngredientRoute = createContext((val: number) => {});

const IngredientRoute: React.FC = () => {
  const { ingredients } = useTypedSelector(
    (state) => state.ingredientsContainerReducer
  );
  const [update, setUpdate] = useState(0);
  const SiderWidth = "30%";
  const { getAllIngredients } = useActions();

  useEffect(() => {
    getAllIngredients();
  }, [update]);
  return (
    <UpdateIngredientRoute.Provider value={setUpdate}>
      <Layout hasSider style={LAYOUT_PADDING}>
        <Sider
          width={SiderWidth}
          style={{
            ...WhiteColor,
          }}
        >
          <Filter.Ingredient />
        </Sider>
        <Content style={{ padding: "10px" }}>
          <Row justify={"center"}>
            <Title>Ингредиенты</Title>
            <NewIngredient />
          </Row>
          <Space
            direction="vertical"
            size="middle"
            style={{ display: "flex", paddingTop: "20px" }}
          >
            {ingredients
              ? ingredients.map((ingr) => (
                  <IngredientCard ingredient={ingr} key={ingr.id} />
                ))
              : null}
          </Space>
        </Content>
      </Layout>
    </UpdateIngredientRoute.Provider>
  );
};
export default IngredientRoute;
