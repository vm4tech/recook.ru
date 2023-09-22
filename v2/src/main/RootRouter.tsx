import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dev from "./Dev";
import App from "./App";
import { observer } from "mobx-react-lite";
import LoginPage from "./components/routes/auth/LoginPage";
import SignupPage from "./components/routes/auth/SignupPage";
import Live from "./Live";
import IngredientRoute from "./components/routes/IngredientRoute";
import ProfileRoute from "./components/routes/ProfileRoute";

// import Dev from "./Dev";
// import App from "./App";
// import Info from "./Info";
// import IngredientRoute from "./components/routes/IngredientRoute";
// import DishRoute from "./components/routes/DishRoute";
// import Admin from "./Admin";
// import { createContext } from "vm";
// import { UpdateStates } from "./utils/utils";
// import LoginPage from "./components/routes/auth/LoginPage";
// import SignupPage from "./components/routes/auth/SignupPage";
// import Profile from "./components/auth/profile/Profile";

const RootRouter: React.FC = () => {
  // const { appSections } = useTypedSelector((state) => state.appReducer);
  const [refreshURLS, setRefreshURLS] = useState();

  // const { getAppSections } = useActions();
  useEffect(() => {
    // getAppSections();
  }, [refreshURLS]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="info" element={<Dev />} />
          <Route path="live" element={<Live />} />
          <Route path="profile" element={<ProfileRoute />} />
          <Route path="dev" element={<Dev />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="ingredient" element={<IngredientRoute />} />
        </Route>
        <Route path="admin" element={<Dev />}>
          <Route path="ingredient" element={<IngredientRoute />} />
          <Route path="dish" element={<Dev />} />
        </Route>
        <Route path="*" element={<Navigate to={"/info"} replace />} />
      </Routes>
    </Router>
  );
};
export default observer(RootRouter);
