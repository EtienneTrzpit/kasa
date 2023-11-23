import { NavLink } from "react-router-dom";
import "../assets/style/info.scss";

export default function NotFound() {
  return (
    <>
      <h1 className="error-title">404</h1>
      <p className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" exact="true" className="error-link">
        Retourner sur la page d'accueil
      </NavLink>
    </>
  );
}
