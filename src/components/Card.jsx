import { Link } from "react-router-dom";
import "../assets/style/card.scss";

export default function Card({ title }) {
  return (
    <Link to={`/location/${title}`}>
      <div className="article">
        <h2 className="article-title">{title}</h2>
      </div>
    </Link>
  );
}
