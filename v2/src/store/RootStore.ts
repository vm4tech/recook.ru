import { UserStore } from "./UserStore";
import { LiveStore } from "./LiveStore";
import { IngredientStore } from "./IngredientStore";
import {IngredientContainerStore} from "./containers/IngredientContainer";

export class RootStore {
  userStore = new UserStore();
  liveStore = new LiveStore();
  ingredientStore = new IngredientStore();

  // containers
  ingredientContainer = new IngredientContainerStore();
}
