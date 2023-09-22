import { EatValue, LongId, MeasureType } from "./common/CommonTypes";

// unique value for localisation
export enum IngredientEnum {
  DAIRY = 1,
  MEAT = 2,
  VEGETABLES = 3,
  FRUITS = 4,
  GRAINS = 5,
  LEGUMES = 6,
  BAKED_GOODS = 7,
  SEAFOOD = 8,
  NUTS_SEEDS = 9,
  HERBS_SPICES = 10,
  GARNISHES = 11,
}

export interface Ingredient extends LongId, EatValue {
  name: string;
  type: IngredientEnum;
  measureType: MeasureType;
  amount: number;
}

export interface IngredientsContainer {
  ingredients?: Ingredient[];
}
// "Dairy"
// "Meat"
// "Vegetables"
// "Fruits"
// "Grains"
// "Legumes"
// "Backed Goods"
// "Seafood"
// "Nuts and seeds"
// "Herbs and spices"
// "Garnishes"

// "Молочка"
// "Мясо"
// "Овощи"
// "Фрукты"
// "Зерновые"
// "Бобовые"
// "Выпечка"
// "Морепродукты"
// "Орехи и семена"
// "Травы и специи"
// "Гарниры"
