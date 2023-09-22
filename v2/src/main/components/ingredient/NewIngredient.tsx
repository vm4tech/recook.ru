import { Button } from "antd";
import { useState } from "react";
import IngredientDrawer from "./IngredientDrawer";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";

const NewIngredient: React.FC = () => {
  const [open, setOpen] = useState(false);
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
      <IngredientDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default observer(NewIngredient);
