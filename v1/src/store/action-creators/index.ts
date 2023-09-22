// import * as appActions from "./appActions";
import * as ingredientActions from "./ingredientActions";
import * as dishesActions from "./dishActions";
import * as joinedActions from "./joinedActions";
import * as filterActions from "./filterActions";
import * as signActions from "./signActions";
import * as profileActions from "./profileActions";
export default {
  ...ingredientActions,
  ...dishesActions,
  ...joinedActions,
  ...filterActions,
  ...signActions,
  ...profileActions,
};
