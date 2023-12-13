import { Link } from "react-router-dom";
import "../assets/style/card.scss";

export default function Card({ title, id, cover }) {
  return (
    <Link to={`/location/${id}`}>
      <div className="article" style={{ backgroundImage: `url(${cover})` }}>
        <h2 className="article-title">{title}</h2>
      </div>
    </Link>
  );
}
