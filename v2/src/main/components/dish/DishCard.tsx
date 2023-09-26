import React, { useContext, useEffect, useState } from "react";
import { Avatar, Card, List, Space, Typography } from "antd";
import { ruMeasureEnum } from "../../utils/languageEnum";
import DishDrawer from "./DishDrawer";
import {Dish} from "../../../store/DishStore";
import {observer} from "mobx-react-lite";
import {getImage} from "../../utils/randomer/RandomImages";
import {useLocation, useNavigate} from "react-router-dom";

const { Text, Link, Title } = Typography;
const { Meta } = Card;
const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Card
        // onClick={() => navigateTo(dish.id!)}
        id={dish ? dish.id?.toString() : "key"}
        cover={
          <img
            alt="example"
            src={getImage()}
            style={{ height: "20vh", objectFit: "cover" }}
          />
        }
        bordered={false}
        hoverable
      >
        <Title style={{ textAlign:"center" }} level={4}>
          {dish.name}
        </Title>
      </Card>

      {/*<DishDrawer*/}
      {/*  dish={dish}*/}
      {/*  key={dish?.id?.toString()}*/}
      {/*  // setOpen={setOpen}*/}
      {/*  // open={open}*/}
      {/*/>*/}
    </>
  );
};

export default observer(DishCard);
