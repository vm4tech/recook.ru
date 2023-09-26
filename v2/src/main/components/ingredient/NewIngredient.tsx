import {Button, FloatButton} from "antd";
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
      <FloatButton
        shape="circle"
        tooltip={"Create new ingredient"}
        type="primary"
        style={{ right: 94, bottom: 94, scale: "1.5" }}
        icon={<PlusCircleOutlined />}
        onClick={showDrawer}
      />
      <IngredientDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default observer(NewIngredient);
