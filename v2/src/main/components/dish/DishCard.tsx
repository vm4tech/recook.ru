import React, { useContext, useEffect, useState } from "react";
import { Avatar, Card, List, Space, Typography } from "antd";
import { ruMeasureEnum } from "../../utils/languageEnum";
import DishDrawer from "./DishDrawer";
import {Dish} from "../../../store/DishStore";
import {observer} from "mobx-react-lite";

const { Text, Link, Title } = Typography;
const gridStyle: React.CSSProperties = {
  width: "33%",
  // textAlign: "center",
};

const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Card
        onClick={() => showDrawer()}
        id={dish ? dish.id?.toString() : "key"}
        title={
          <Space>
            <Title style={{ margin: 0 }} level={2}>
              {dish.name}
            </Title>
            <Title type="success" style={{ margin: 0 }} level={2}>
              id: {dish.id}
            </Title>
          </Space>
        }
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{ height: "10vh", objectFit: "cover" }}
          />
        }
        bordered={false}
        hoverable
      >
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text style={{ fontSize: "200%" }} strong>
              Общие данные:
            </Text>
            <Text>
              Название: <b>{dish.name}</b>
            </Text>
            <Text>
              Количество: <b>{dish.amount}</b>
              <b> {ruMeasureEnum[dish.measureType]}</b>
            </Text>
          </Space>
        </Card.Grid>

        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text style={{ fontSize: "200%" }} strong>
              Энергетическая ценность:
            </Text>
            <Text>
              Белки: <b>{dish.proteins}</b>
            </Text>
            <Text>
              Жиры: <b>{dish.fat}</b>
            </Text>
            <Text>
              Углеводы: <b>{dish.carbohydrate}</b>
            </Text>
            <Text>
              Сахар: <b>{dish.sugar}</b>
            </Text>
            <Text>
              Калории: <b>{dish.calories}</b>
            </Text>
          </Space>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text style={{ fontSize: "200%" }} strong>
              Ингредиенты
            </Text>
            {/*<DishIngredients joineds={dish.joinedIngredients} />*/}
          </Space>
        </Card.Grid>
      </Card>

      <DishDrawer
        dish={dish}
        key={dish?.id?.toString()}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};

export default observer(DishCard);
