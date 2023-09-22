import {CommonStore} from "../CommonStore";
import autoObservable from "../autoObservable";
import {Ingredient, INGREDIENT_URL} from "../IngredientStore";
import {AXIOS} from "../../actions/config";

export class IngredientContainerStore extends CommonStore {
    ingredients?: Ingredient[];
    constructor() {
        super();
        autoObservable(this);
    }

    setIngredients = (data: Ingredient[]) => {
        this.ingredients = data;
    }

    getAllIngredients = async () => {
        this.setLoading(true);
        // await this.delay(3000);
        await AXIOS.get(INGREDIENT_URL + "/")
            .then((res) => {
                this.setIngredients(res.data);
                console.warn("res", res.data);
            })
            .catch((err) => {
                this.setError(err);
            });
        this.setLoading(false);
    }
}