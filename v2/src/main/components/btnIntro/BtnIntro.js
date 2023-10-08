import stars__btn from "./img/stars__btn.png";
import intro__arrow from "./img/btn-intro__arrow.png";
import "./style.css";

const BtnIntro = () => {
    return ( 
        <a className="btn btn-intro">
            <img src={stars__btn} className="btnIntro__image-stars"></img>
            <img src={intro__arrow} className="btnIntro__image-arrow"></img>
        </a>
     );
}
 
export default BtnIntro;