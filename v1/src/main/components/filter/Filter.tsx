import React from "react";
import FilterIngredient from "./FilterIngredient";
import FilterDish from "./FilterDish";

export type CommonPropsType = {
  className?: string;
  children: React.ReactNode;
};
type FilterParams = {
  Dish: typeof FilterDish;
  Ingredient: typeof FilterIngredient;
};

const Filter: React.FC & FilterParams = () => {
  return <></>;
};

Filter.Dish = FilterDish;
Filter.Ingredient = FilterIngredient;

export default Filter;
