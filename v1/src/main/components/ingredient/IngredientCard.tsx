import React, { useState } from "react";
import { Card, Space, Typography } from "antd";
import { Ingredient } from "../../../types/Ingredient";
import IngredientDrawer from "./IngredientDrawer";
import { useActions } from "../../../hooks/useActions";
import { ruIngredientEnum, ruMeasureEnum } from "../../utils/languageEnum";

const { Text, Link, Title } = Typography;
const gridStyle: React.CSSProperties = {
  width: "50%",
};

const IngredientCard: React.FC<{
  ingredient: Ingredient;
  openable?: boolean;
}> = ({ ingredient, openable = true }) => {
  const [open, setOpen] = useState(false);
  const { updateIngredient } = useActions();
  const showDrawer = () => {
    if (openable) {
      setOpen(true);
    }
  };

  return (
    <>
      <Card
        onClick={() => showDrawer()}
        id={ingredient ? ingredient.id?.toString() : "key"}
        title={
          <Space>
            <Title style={{ margin: 0 }} level={2}>
              {ingredient.name}
            </Title>
            <Title type="success" style={{ margin: 0 }} level={2}>
              id: {ingredient.id}
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
              Название: <b>{ingredient.name}</b>
            </Text>
            <Text>
              Тип ингредиента: <b>{ruIngredientEnum[ingredient.type]}</b>
            </Text>
            <Text>
              Количество: <b>{ingredient.amount}</b>
              <b> {ruMeasureEnum[ingredient.measureType]}</b>
            </Text>
          </Space>
        </Card.Grid>
        {/* <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="Card title"
          description="This is the description"
        /> */}
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text style={{ fontSize: "200%" }} strong>
              Энергетическая ценность:
            </Text>
            <Text>
              Белки: <b>{ingredient.proteins}</b>
            </Text>
            <Text>
              Жиры: <b>{ingredient.fat}</b>
            </Text>
            <Text>
              Углеводы: <b>{ingredient.carbohydrate}</b>
            </Text>
            <Text>
              Сахар: <b>{ingredient.sugar}</b>
            </Text>
            <Text>
              Калории: <b>{ingredient.calories}</b>
            </Text>
          </Space>
        </Card.Grid>
      </Card>
      <IngredientDrawer
        sendFunction={updateIngredient}
        ingredient={ingredient}
        key={ingredient?.id}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};

export default IngredientCard;
