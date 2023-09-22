import { UserStore } from "./UserStore";
import { LiveStore } from "./LiveStore";
import { IngredientStore } from "./IngredientStore";
import {IngredientContainerStore} from "./containers/IngredientContainer";
import {ProfileStore} from "./ProfileStore";

export class RootStore {
  userStore = new UserStore();
  liveStore = new LiveStore();
  ingredientStore = new IngredientStore();
  profileStore = new ProfileStore();

  // containers
  ingredientContainer = new IngredientContainerStore();
}
