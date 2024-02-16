import { NavLink } from "react-router-dom";
import "../assets/style/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="kasa" />
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <NavLink to="/kasa" exact="true" activeclassname="selected">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/kasa/about" activeclassname="selected">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
