import {CommonStore} from "./CommonStore";
import autoObservable from "./autoObservable";
import {EatValue, LongId, MeasureType} from "../types/common/CommonTypes";
import {AXIOS, SERVER_CORE_URL} from "../actions/config";
export const DISH_URL = SERVER_CORE_URL + "/dish"

export interface Dish extends LongId, EatValue {
    userId?: number;
    name: string;
    description: string;
    nickname: string;
    measureType: MeasureType;
    amount: number;
    // joinedIngredients?: JoinedDI[];
}

export class DishStore extends CommonStore implements Dish{
    userId?: number;
    amount: number = 0;
    calories: number= 0;
    carbohydrate: number = 0;
    description: string = "";
    fat: number = 0;
    measureType: MeasureType = MeasureType.GRAM;
    name: string = "";
    nickname: string = "";
    proteins: number = 0;
    sugar: number = 0;

    constructor() {
        super();
        autoObservable(this);
    }

    createDish = async (dish: Dish) => {
        this.setLoading(true);
        return AXIOS.post(DISH_URL+"/create", dish)
          .then(res => {
              console.info("success:", res.data);
              this.setLoading(false);
          })
          .catch((err) => {
              console.error("errr:", err);
              this.setLoading(false);
              this.setError(err);
              throw err;
          });
    }

    updateDish = async (dish: Dish) => {
        this.setLoading(true);
        return AXIOS.patch(DISH_URL+"/update", dish)
          .then(res => {
              console.info("success:", res.data);
              this.setLoading(false);
          })
          .catch((err) => {
              console.error("errr:", err);
              this.setLoading(false);
              this.setError(err);
              throw err;
          });
    }

    // getDish = async () => {
    //     this.setLoading(true);
    //     return await AXIOS.post(INGREDIENT_URL + "/create", {
    //         ...ingredient,
    //     })
    //       .then((res) => {
    //           console.info("success:", res.data);
    //           this.setLoading(false);
    //       })
    //       .catch((err) => {
    //           console.error("errr:", err);
    //           this.setLoading(false);
    //           this.setError(err);
    //           throw err;
    //       });
    // }


}