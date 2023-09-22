import React, { useContext, useEffect } from "react";
import { Ingredient } from "../../../types/Ingredient";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { selectMeasureType, selectTypeIngredient } from "../../utils/utils";
import { Option } from "antd/es/mentions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  SendFunctionType,
  SetOpenType,
} from "../../../types/common/CommonTypes";
import { useCRUDSender } from "../../../hooks/useCRUDSender";
import { UpdateIngredientRoute } from "../routes/IngredientRoute";

const { Title } = Typography;

const IngredientDrawer: React.FC<{
  ingredient?: Ingredient;
  setOpen: SetOpenType;
  open: boolean;
  sendFunction: SendFunctionType;
}> = ({ ingredient, setOpen, open, sendFunction }) => {
  const { loading } = useTypedSelector((state) => state.ingredientReducer);
  const sender = useCRUDSender(sendFunction, setOpen);
  const setUpdate = useContext(UpdateIngredientRoute);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(ingredient);
  }, []);

  const formIngredientId = "ingredient" + ingredient?.id;

  const onClose = () => {
    setOpen(false);
  };

  const getValues = async () => {
    const isUpdate = await sender({
      ...form.getFieldsValue(),
      id: ingredient?.id,
    });
    if (isUpdate) {
      setUpdate(Math.random());
    }
  };

  const selectMeasure = (
    <Form.Item
      initialValue={ingredient?.measureType}
      style={{ marginBottom: "0px" }}
      name="measureType"
      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите меру",
        },
      ]}
    >
      <Select disabled={loading} style={{ width: "60px" }}>
        {selectMeasureType.map((obj) => (
          <Option value={obj.value.toString()}>{obj.name}</Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <Drawer
      title={
        ingredient ? `Редактирование ${ingredient.name}` : `Создание игредиента`
      }
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Закрыть</Button>
          <Button
            form={formIngredientId}
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
        name={formIngredientId}
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
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите название ингредиента",
                },
              ]}
            >
              <Input
                disabled={loading}
                placeholder="Введите название ингредиента"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="type"
              label="Тип ингредиента"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите тип ингредиента",
                },
              ]}
            >
              <Select
                // defaultValue={ingredient ? ingredient.type : ""}
                disabled={loading}
                placeholder="Выберите тип ингредиента"
              >
                {selectTypeIngredient.map((obj) => (
                  <Option value={obj.value.toString()}>{obj.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="amount"
              label="Количество"
              rules={[
                { required: true, message: "Пожалуйста, введите количество" },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={selectMeasure} />
            </Form.Item>
          </Col>
        </Row>
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Энергетическая ценность:
        </Title>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="proteins"
              label="Белки"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество белка (гр)",
                },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="fat"
              label="Жир"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество жира (гр)",
                },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="carbohydrate"
              label="Углевод"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество углевода (гр)",
                },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="sugar"
              label="Сахар"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество сахара (гр)",
                },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={"гр"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="calories"
              label="Калории"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите количество калориев (ккал)",
                },
              ]}
            >
              <InputNumber disabled={loading} addonAfter={"ккал"} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default IngredientDrawer;
