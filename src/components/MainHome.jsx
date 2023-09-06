import logements from "../data/logements.json";
import Card from "./Card";
import "../assets/style/card.scss";

export default function MainHome() {
  return (
    <div className="articles">
      {logements.map((logement) => (
        <Card title={logement.title} />
      ))}
    </div>
  );
}
