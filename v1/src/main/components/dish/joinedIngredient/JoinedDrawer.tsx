import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import { useCRUDSender } from "../../../../hooks/useCRUDSender";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
  SendFunctionType,
  SetOpenType,
} from "../../../../types/common/CommonTypes";
import { Dish } from "../../../../types/Dish";
import { JoinedFormType } from "../../../../types/form/JoinedFormType";
import { JoinedDI } from "../../../../types/JoinedDI";

import { selectMeasure } from "../../../utils/utils";
import SelectIngredients from "./SelectIngredients";
import React, { useContext, useEffect } from "react";
import { UpdateDishRoute } from "../../routes/DishRoute";

const JoinedDrawer: React.FC<{
  joined?: JoinedDI;
  setOpen: SetOpenType;
  open: boolean;
  sendFunction: SendFunctionType;
  dish: Dish;
}> = ({ joined, open, sendFunction, setOpen, dish }) => {
  const { loading } = useTypedSelector((state) => state.restReducer);
  const sender = useCRUDSender(sendFunction, setOpen);
  const setUpdate = useContext(UpdateDishRoute);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(joined);
  }, []);

  const joinedFormId = "joined" + joined?.id;

  const getValues = async () => {
    const isUpdate = await sender({
      ...form.getFieldsValue(),
      dishId: dish.id,
    });
    if (isUpdate) {
      setUpdate(Math.random());
    }
  };

  return (
    <Drawer
      title="Добавление ингредиента"
      width={720}
      onClose={() => setOpen(false)}
      open={open}
      extra={
        <Space>
          <Button onClick={() => setOpen(false)}>Закрыть</Button>
          <Button
            form={joinedFormId}
            loading={loading}
            htmlType="submit"
            type="primary"
          >
            Сохранить
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        name={joinedFormId}
        layout="vertical"
        onFinish={getValues}
        requiredMark
      >
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Общие данные:
        </Title>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Название"
              initialValue={joined?.name}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите название",
                },
              ]}
            >
              <Input disabled={loading} placeholder="Введите название" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="amount"
              label="Количество"
              initialValue={joined?.amount}
              rules={[
                { required: true, message: "Пожалуйста, введите количество" },
              ]}
            >
              <InputNumber
                disabled={loading}
                addonAfter={selectMeasure(joined, loading)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Выберите ингредиент:
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <SelectIngredients ingredientId={joined?.ingredient.id} />
            {/* </Form.Item> */}
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default JoinedDrawer;
