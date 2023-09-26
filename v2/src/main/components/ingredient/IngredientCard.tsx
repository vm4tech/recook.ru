import React, { useState } from "react";
import {Avatar, Card, Space, Typography} from "antd";
import IngredientDrawer from "./IngredientDrawer";
import { observer } from "mobx-react-lite";
import {Ingredient} from "../../../store/IngredientStore";
import {ruIngredientEnum, ruMeasureEnum} from "../../utils/languageEnum";
import {getImage} from "../../utils/randomer/RandomImages";

const { Text, Link, Title } = Typography;
const gridStyle: React.CSSProperties = {
  width: "50%",
};

const IngredientCard: React.FC<{
  ingredient: Ingredient;
  openable?: boolean;
}> = ({ ingredient, openable = true }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    if (openable) {
      setOpen(true);
    }
  };

  return (
    <>
      <Card
        onClick={showDrawer}
        id={ingredient ? ingredient.id?.toString() : "key"}
        cover={
          <img
            alt="example"
            src={getImage()}
            style={{ height: "10vh", objectFit: "cover" }}
          />
        }
        bordered={false}
        hoverable
      >

        <Card.Meta title={ingredient.name} />

      </Card>
    </>
  );
};

export default observer(IngredientCard);
