import {Button, FloatButton} from "antd";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import DishDrawer from "./DishDrawer";
import {ReactFC} from "../../../types/common/ReactFC";
import {observer} from "mobx-react-lite";
const NewDish: ReactFC = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <FloatButton
        shape="circle"
        tooltip={"Create new dish"}
        type="primary"
        style={{ right: 94, bottom: 94, scale: "1.5" }}
        icon={<PlusCircleOutlined />}
        onClick={showDrawer}
      />
      <DishDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default observer(NewDish);
