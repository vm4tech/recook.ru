import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Dev from "./Dev";
import App from "./App";
import Info from "./Info";
import IngredientRoute from "./components/routes/IngredientRoute";
import DishRoute from "./components/routes/DishRoute";
import Admin from "./Admin";
import { createContext } from "vm";
import { UpdateStates } from "./utils/utils";
import LoginPage from "./components/routes/auth/LoginPage";
import SignupPage from "./components/routes/auth/SignupPage";
import Profile from "./components/auth/profile/Profile";

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
          <Route path="profile" element={<Profile />} />
          <Route path="dev" element={<Dev />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="ingredient" element={<IngredientRoute />} />
          <Route path="dish" element={<DishRoute />} />
        </Route>
        <Route path="*" element={<Navigate to={"/info"} replace />} />
      </Routes>
    </Router>
  );
};
export default RootRouter;
