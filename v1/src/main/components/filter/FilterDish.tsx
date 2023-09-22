import {
  AutoComplete,
  Button,
  Col,
  Form,
  InputNumber,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { Dish } from "../../../types/Dish";
import { getAllDishesWithoutRedux } from "../../../store/action-creators/dishActions";
const { Title } = Typography;

const FilterDish: React.FC = () => {
  //
  const [dishes, setDishes] = useState<Dish[]>([]);
  const { filterDishes } = useActions();
  const [form] = Form.useForm();
  // Установка игредиентов для быстрого фильтра
  useEffect(() => {
    getAllDishesWithoutRedux().then((res) => {
      setDishes(res);
    });
  }, []);
  //
  const formFilterName = "filterDishes";
  const options = dishes?.map((el) => ({
    value: el.name,
  }));
  const getValues = async () => {
    filterDishes(form.getFieldsValue());
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
                placeholder="Название, например: Торт"
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
            Применить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FilterDish;
