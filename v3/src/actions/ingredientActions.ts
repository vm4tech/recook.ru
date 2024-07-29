import {AXIOS, SERVER_URL} from "./config";
import {IngredientCreateRequest} from "../types/IngredientApi";

const INGREDIENT_URL = `${SERVER_URL}/v1/ingredients`
export const createIngredient = (data: IngredientCreateRequest) =>
    AXIOS.post(INGREDIENT_URL + "/create", data)
