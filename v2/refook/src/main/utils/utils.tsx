import { Form, MenuProps, Select } from "antd";
import { Option } from "antd/es/mentions";
import { EnumType } from "typescript";
import { MeasureType } from "../../types/common/CommonTypes";
import { EnumObject, ruIngredientEnum, ruMeasureEnum } from "./languageEnum";
import { IngredientEnum } from "../../store/IngredientStore";

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// Надо бы определять имена под локализацию, пока русская, но можно сделать и не только русскую
// Фильтр enum, по-хорошему бы тоже сделать enum с той стороны)
// https://stackoverflow.com/questions/2751733/map-enum-in-jpa-with-fixed-values (надо сделать перечисление с 0 по .......)
const toArray = (enumIntefrace: any, mapper: EnumObject) => {
  return Object.keys(enumIntefrace)
    .filter((x) => !(parseInt(x) >= 0))
    .map((key) => {
      let value = Object.values(enumIntefrace).indexOf(key) + 1;
      return { value: value, name: mapper[value] };
    });
};

export const selectTypeIngredient = toArray(IngredientEnum, ruIngredientEnum);
//
export const selectMeasureType = toArray(MeasureType, ruMeasureEnum);

export const selectMeasure = (object: any, loading: boolean) => (
  <Form.Item
    initialValue={object?.measureType}
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

// export const UpdateStates = createContext(0);
//
// export const setErrorsFromResponse = (errors: ErrorType): ErrorFormType[] => {
//   console.log(errors.errors);
//   const newErrors: ErrorFormType[] = [];
//   errors.errors.forEach((error) =>
//     newErrors.push({ name: error.field, errors: [error.message] })
//   );
//   return newErrors;
// };
