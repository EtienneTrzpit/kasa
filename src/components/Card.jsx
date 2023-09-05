import { Link } from "react-router-dom";
import "../assets/style/card.scss";

export default function Card({ title }) {
  return (
    <div className="article">
      <Link to={`/location/${title}`}>
        <h2 className="article-title">{title}</h2>
      </Link>
    </div>
  );
}
