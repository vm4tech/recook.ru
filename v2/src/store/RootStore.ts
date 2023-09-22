import { UserStore } from "./UserStore";
import { LiveStore } from "./LiveStore";
import { IngredientStore } from "./IngredientStore";
import {IngredientContainerStore} from "./containers/IngredientContainer";
import {ProfileStore} from "./ProfileStore";
import {DishStore} from "./DishStore";
import {DishContainer} from "./containers/DishContainer";

export class RootStore {
  userStore = new UserStore();
  liveStore = new LiveStore();
  ingredientStore = new IngredientStore();
  profileStore = new ProfileStore();
  dishStore = new DishStore();

  // containers
  ingredientContainer = new IngredientContainerStore();
  dishContainer = new DishContainer();
}
