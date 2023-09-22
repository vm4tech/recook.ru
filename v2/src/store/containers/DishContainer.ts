import {Dish, DISH_URL} from "../DishStore";
import {CommonStore} from "../CommonStore";
import autoObservable from "../autoObservable";
import {AXIOS} from "../../actions/config";


export class DishContainer extends CommonStore{
    dishes?: Dish[];

    constructor() {
        super();
        autoObservable(this);
    }

    getAllDishes = async () => {
        this.setLoading(true);
        return await AXIOS.get(DISH_URL + "/")
            .then((res) => {
                this.setDishes(res.data);
                console.warn("res", res.data);
                this.setLoading(false);
            })
            .catch((err) => {
                this.setError(err);
                this.setLoading(false);
                throw err;
            });
    }

    setDishes = (dishes: Dish[]) => {
        this.dishes = dishes;
    }
}