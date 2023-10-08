
import { NavLink } from "react-router-dom";
import "./style.css"
import BtnIntro from "../btnIntro/BtnIntro";

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                    <strong>Re</strong>fook
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item"> <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>О НАС</NavLink></li>
                        <li className="nav-list__item"> <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>РЕЦЕПТЫ</NavLink></li>
                        <li className="nav-list__item"> <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>КЛАДОВАЯ</NavLink></li>
                    </ul>
                    <BtnIntro/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;