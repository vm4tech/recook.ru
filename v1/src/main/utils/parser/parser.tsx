// import { IngredientFormType } from "../../../types/form/IngredientFormType";
// // https://bobbyhadz.com/blog/typescript-object-remove-property#remove-a-property-from-an-object-in-typescript-using-lodash
// // import _ from "lodash";
// import { Ingredient } from "../../../types/Ingredient";
// import { SendFunctionType } from "../../../types/common/CommonTypes";
// import { DishFormType } from "../../../types/form/DishFormType";
// import { Dish } from "../../../types/Dish";
// import { JoinedFormType } from "../../../types/form/JoinedFormType";
// import { JoinedDI } from "../../../types/JoinedDI";

// export const parseIngredientAndSend = async (
//   ingredient: IngredientFormType,
//   sendFunction: SendFunctionType
// ) => {
//   let sendBody: Ingredient = parseIngredientFromForm(ingredient);

// };
export const parseIngredientFromForm = () => {};

// export const parseIngredientFromForm = (
//   ingredient: IngredientFormType
// ): Ingredient => {
//   let eatValue = {
//     fat: ingredient.fat,
//     carbohydrate: ingredient.carbohydrate,
//     proteins: ingredient.proteins,
//     calories: ingredient.calories,
//     sugar: ingredient.sugar,
//   };
//   //   type EatVaue = keyof EatVaue;
//   //   const body = _.omit(ingredient, Array<keyof EatValue>());

//   //   console.log("body", body);
//   return { ...ingredient, id: ingredient?.id, eatValue };
// };

// export const parseDishFromForm = (dish: DishFormType): Dish => {
//   let eatValue = {
//     fat: dish.fat,
//     carbohydrate: dish.carbohydrate,
//     proteins: dish.proteins,
//     calories: dish.calories,
//     sugar: dish.sugar,
//   };

//   // Мб сделать с передачей joined, но хз
//   return { ...dish, id: dish?.id, eatValue };
// };

// export const parseJoinedDI = (
//   joined: JoinedFormType,
//   dish: Dish
// ): JoinedFormType => {
//   return { ...joined, dishId: dish?.id };
// };
