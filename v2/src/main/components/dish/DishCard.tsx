import React, { useContext, useEffect, useState } from "react";
import { Avatar, Card, List, Space, Typography } from "antd";
import { ruMeasureEnum } from "../../utils/languageEnum";
import DishDrawer from "./DishDrawer";
import {Dish} from "../../../store/DishStore";
import {observer} from "mobx-react-lite";
import {getImage} from "../../utils/randomer/RandomImages";

const { Text, Link, Title } = Typography;
const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Card
        onClick={showDrawer}
        id={dish ? dish.id?.toString() : "key"}
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
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Title style={{ margin: 0 }} level={2}>
              {dish.name}
            </Title>
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
