import { Button } from "antd";
import { useState } from "react";
import IngredientDrawer from "./IngredientDrawer";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useActions } from "../../../hooks/useActions";
const NewIngredient: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { createIngredient } = useActions();
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        type="dashed"
        block
        icon={<PlusCircleOutlined />}
        onClick={() => showDrawer()}
      />
      <IngredientDrawer
        sendFunction={createIngredient}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default NewIngredient;
