import {
  AutoComplete,
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Option } from "antd/es/mentions";
import { Ingredient } from "../../../types/Ingredient";
import { selectTypeIngredient } from "../../utils/utils";
import { useActions } from "../../../hooks/useActions";
import { getAllIngredientsWithoutRedux } from "../../../store/action-creators/ingredientActions";
const { Title } = Typography;

const FilterIngredient: React.FC = () => {
  //
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { filterIngredients } = useActions();
  const [form] = Form.useForm();
  // Установка игредиентов для быстрого фильтра
  useEffect(() => {
    getAllIngredientsWithoutRedux().then((res) => {
      setIngredients(res);
    });
  }, []);
  //
  const formFilterName = "filterIngredients";
  const options = ingredients?.map((el) => ({
    value: el.name,
  }));
  const getValues = async (ingr: any) => {
    filterIngredients(ingr);
  };

  //
  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Form
        form={form}
        name={formFilterName}
        layout="vertical"
        onFinish={getValues}
        requiredMark
      >
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Общие данные:
        </Title>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="name" label="Название">
              <AutoComplete
                allowClear
                options={options}
                placeholder="Название, например: Молоко"
                filterOption={(inputValue, option) =>
                  option!.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="type" label="Тип">
              <Select allowClear placeholder="Выберите тип ингредиента">
                {selectTypeIngredient.map((obj) => (
                  <Option value={obj.value.toString()}>{obj.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="amount" label="Количество">
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Энергетическая ценность:
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="proteins" label="Белки">
              <InputNumber addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="fat" label="Жир">
              <InputNumber addonAfter={"гр"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="carbohydrate" label="Углевод">
              <InputNumber addonAfter={"гр"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="sugar" label="Сахар">
              <InputNumber addonAfter={"гр"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="calories" label="Калории">
              <InputNumber addonAfter={"ккал"} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" form={formFilterName}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FilterIngredient;
