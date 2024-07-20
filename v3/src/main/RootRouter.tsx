import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Outlet,
} from "react-router-dom";
import {StartApp} from "./StartApp";
import {Dev} from "./app/Dev";
import {Live} from "./app/Live";
import {LoginPage} from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import {Main} from "./components/main/Main";
import {Recipes} from "./components/recipes/Recipes";
import {Recipe} from "./components/recipes/Recipe/Recipe";


export const RootRouter: React.FC = () => {
    // const { appSections } = useTypedSelector((state) => state.appReducer);
    const [refreshURLS, setRefreshURLS] = useState();

    // const { getAppSections } = useActions();
    useEffect(() => {
        // getAppSections();
    }, [refreshURLS]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartApp/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="info" element={<Dev/>}/>
                    <Route path="live" element={<Live/>}/>
                    {/*<Route path="profile" element={<ProfileRoute />} />*/}
                    <Route path="dev" element={<Dev/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="signup" element={<SignupPage/>}/>
                    {/*<Route path="ingredient" element={<IngredientRoute />} />*/}
                    <Route path="recipes/all" element={<Recipes/>}>
                        {/*<Route path="all" element={<DishRoute />}/>*/}
                        {/*<Route path=":id" element={<DishPage />}/>*/}
                    </Route>
                    <Route path="recipe/:id" element={<Recipe/>}/>
                </Route>
                {/*<Route path="admin" element={<Admin />}>*/}
                {/*  <Route path="ingredient" element={<IngredientRoute />} />*/}
                {/*  <Route path="dish" element={<DishRoute />} />*/}
                {/*</Route>*/}
                <Route path="*" element={<Navigate to={"/"} replace/>}/>
            </Routes>
        </Router>
    );
};
