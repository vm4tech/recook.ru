import { Button } from "antd";
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
      <Button
        type="dashed"
        block
        icon={<PlusCircleOutlined />}
        onClick={() => showDrawer()}
      />
      <DishDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default observer(NewDish);
