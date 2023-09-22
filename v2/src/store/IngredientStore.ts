import { CommonStore } from "./CommonStore";
import autoObservable from "./autoObservable";

import axios from "axios";
import {AXIOS, CORE_URL, SERVER_CORE_URL, SERVER_URL} from "../actions/config";
import { EatValue, LongId, MeasureType } from "../types/common/CommonTypes";

export const INGREDIENT_URL = SERVER_CORE_URL+ "/ingredient";

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
  userId?: number;
  name: string;
  type: IngredientEnum;
  measureType: MeasureType;
  amount: number;
}

export class IngredientStore extends CommonStore implements Ingredient {
  id?: number;
  userId?: number;
  amount: number = 0;
  calories: number = 0;
  carbohydrate: number = 0;
  fat: number = 0;
  measureType: MeasureType = MeasureType.GRAM;
  name: string = "default";
  proteins: number = 0;
  sugar: number = 0;
  type: IngredientEnum = IngredientEnum.DAIRY;

  constructor() {
    super();
    autoObservable(this);
  }
  createIngredient = async (ingredient: Ingredient) => {
    this.setLoading(true);
    return await AXIOS.post(INGREDIENT_URL + "/create", ingredient)
          .then((res) => {
            console.info("success:", res.data);
            this.setLoading(false);
          })
          .catch((err) => {
            console.error("errr:", err);
            this.setLoading(false);
            this.setError(err);
            throw err;
          });
  };

  updateIngredient = async (ingredient: Ingredient) => {
    this.setLoading(true);
    return await AXIOS.patch(INGREDIENT_URL + "/update", ingredient)
        .then((res) => {
          console.info("success:", res.data);
          this.setLoading(false);
        })
        .catch((err) => {
          console.error("errr:", err);
          this.setLoading(false);
          this.setError(err);
          throw err;
        });
  };
}
