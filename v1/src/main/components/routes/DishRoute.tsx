import React, { createContext, useState } from "react";
import { Button, Layout, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import DishCard from "../dish/DishCard";
import NewDish from "../dish/NewDish";
import { WhiteColor } from "../../utils/colors";
import Filter from "../filter/Filter";
import { LAYOUT_PADDING } from "../../utils/paddings";

const { Sider, Content } = Layout;

const SiderWidth = "30%";

// export const UpdateDishRoute = createContext({
//   update: 0,
//   setUpdate: (val: number) => {},
// });
export const UpdateDishRoute = createContext((val: number) => {});

const DishRoute: React.FC = () => {
  const { dishes } = useTypedSelector((state) => state.dishContainerReducer);

  const [update, setUpdate] = useState(0);
  const { getAllDishes } = useActions();
  useEffect(() => {
    getAllDishes();
  }, [update]);
  return (
    <UpdateDishRoute.Provider value={setUpdate}>
      <Layout hasSider style={LAYOUT_PADDING}>
        <Sider
          width={SiderWidth}
          style={{
            ...WhiteColor,
          }}
        >
          <Filter.Dish />
        </Sider>
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
      </Layout>
    </UpdateDishRoute.Provider>
  );
};
export default DishRoute;
