import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="kasa" />
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="selected">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
