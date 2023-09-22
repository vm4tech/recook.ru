import { Button, Col, Drawer, Form, Input, InputNumber, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import JoinedDrawer from "./JoinedDrawer";
import { Dish } from "../../../../types/Dish";

const AddIngredient: React.FC<{ dish: Dish }> = ({ dish }) => {
  const [open, setOpen] = useState(false);
  const { addDishIngredient } = useActions();

  return (
    <>
      <Button
        type="dashed"
        block
        icon={<PlusCircleOutlined />}
        onClick={() => setOpen(true)}
      >
        Добавить ингредиент
      </Button>
      <JoinedDrawer
        dish={dish}
        open={open}
        sendFunction={addDishIngredient}
        setOpen={setOpen}
      />
    </>
  );
};

export default AddIngredient;
