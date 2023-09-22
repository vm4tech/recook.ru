import { Button } from "antd";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useActions } from "../../../hooks/useActions";
import DishDrawer from "./DishDrawer";
const NewDish: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { createDish } = useActions();
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
      <DishDrawer sendFunction={createDish} open={open} setOpen={setOpen} />
    </>
  );
};

export default NewDish;
