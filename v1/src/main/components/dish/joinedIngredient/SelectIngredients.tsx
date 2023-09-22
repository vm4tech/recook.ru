import React, { useEffect, useState } from "react";
import { Form, Select } from "antd";
import { getAllIngredientsWithoutRedux } from "../../../../store/action-creators/ingredientActions";
import { Ingredient } from "../../../../types/Ingredient";

const SelectIngredients: React.FC<{ ingredientId?: number }> = ({
  ingredientId,
}) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    getAllIngredientsWithoutRedux().then((res) => {
      setIngredients(res);
    });
  }, []);

  const selectArray = ingredients?.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  return (
    <Form.Item
      name="ingredientId"
      label="Ингредиент"
      initialValue={ingredientId}
      rules={[{ required: true, message: "Пожалуйста, выберите ингредиент" }]}
    >
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Поиск ингредиентов"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={selectArray}
      />
    </Form.Item>
  );
};

export default SelectIngredients;
