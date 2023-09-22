import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
} from "antd";
import { selectMeasure } from "../../utils/utils";
import {
  SendFunctionType,
  SetOpenType,
} from "../../../types/common/CommonTypes";
import {Dish} from "../../../store/DishStore";
import {useStore} from "../../../hooks/useStore";
import {Ingredient} from "../../../store/IngredientStore";
import {useSender} from "../../../hooks/useSender";
import {observer} from "mobx-react-lite";


const { Text, Link, Title } = Typography;
const { TextArea } = Input;

const DishDrawer: React.FC<{
  dish?: Dish;
  setOpen: SetOpenType;
  open: boolean;
}> = ({ dish, setOpen, open }) => {
  
  const [form] = Form.useForm();
  const {dishStore, dishContainer} = useStore();
  const {isLoading, createDish, updateDish} = dishStore;
  const create = useSender(createDish, setOpen);
  const update = useSender(updateDish, setOpen);

  const dishFormId = "dish" + dish?.id;
  useEffect(() => {
    form.setFieldsValue(dish);
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const getValues = async () => {
    const dishIngredient: Dish = form.getFieldsValue();
    console.warn("res:", dishIngredient);
    if (dish?.id){
      await update({...dishIngredient, id: dish.id})
        .then(() => dishContainer.getAllDishes())
    } else {
      await create(dishIngredient)
        .then(() => dishContainer.getAllDishes());
    }
  };

  return (
    <Drawer
      key={dish?.id}
      title={dish ? `Редактирование ${dish.name}` : `Создание блюда`}
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Закрыть</Button>
          <Button
            form={dishFormId}
            loading={isLoading}
            htmlType="submit"
            type="primary"
          >
            Сохранить
          </Button>
        </Space>
      }
    >
      <Form
        name={dishFormId}
        form={form}
        layout="vertical"
        onFinish={getValues}
        requiredMark
      >
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Общие данные:
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Название"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите название",
                },
              ]}
            >
              <Input disabled={isLoading} placeholder="Введите название" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="nickname"
              label="Кличка"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите кличку в простонародье",
                },
              ]}
            >
              <Input
                disabled={isLoading}
                placeholder="Пожалуйста, введите название"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Описание"
              initialValue={dish ? dish.description : ""}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите описание",
                },
              ]}
            >
              <TextArea
                rows={4}
                disabled={isLoading}
                placeholder="Введите описание"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="amount"
              label="Количество"
              // initialValue={dish?.amount}
              rules={[
                { required: true, message: "Пожалуйста, введите количество" },
              ]}
            >
              <InputNumber
                disabled={isLoading}
                addonAfter={selectMeasure(dish, isLoading!)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.Item label="Address">
      <Input.Group compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input street" />
        </Form.Item>
      </Input.Group>
    </Form.Item> */}

        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Энергетическая ценность:
        </Title>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="proteins"
              label="Белки"
              // initialValue={dish?.proteins}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество белка (гр)",
                },
              ]}
            >
              <InputNumber disabled={isLoading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="fat"
              label="Жир"
              // initialValue={dish?.fat}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество жира (гр)",
                },
              ]}
            >
              <InputNumber disabled={isLoading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="carbohydrate"
              label="Углевод"
              // initialValue={dish?.carbohydrate}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество углевода (гр)",
                },
              ]}
            >
              <InputNumber disabled={isLoading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="sugar"
              label="Сахар"
              // initialValue={dish?.sugar}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество сахара (гр)",
                },
              ]}
            >
              <InputNumber disabled={isLoading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="calories"
              label="Калории"
              // initialValue={dish?.calories}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество калориев (ккал)",
                },
              ]}
            >
              <InputNumber disabled={isLoading} addonAfter={"ккал"} />
            </Form.Item>
          </Col>
        </Row>
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Ингредиенты
        </Title>
        <Row gutter={16}>
          <Col span={24}>
            {dish ? (
              <>
                {/*<AddIngredient dish={dish} />*/}
                {/*<DishIngredients joineds={dish?.joinedIngredients} />*/}
              </>
            ) : (
              <Title level={4} style={{ textAlign: "center" }} type="warning">
                Создайте блюдо, чтобы добавить детализацию
              </Title>
            )}
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default observer(DishDrawer);
