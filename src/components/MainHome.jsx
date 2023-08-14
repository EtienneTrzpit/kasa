import logements from "../data/logements.json";
import Card from "./Card";

export default function MainHome() {
  return (
    <>
      {logements.map((logement) => (
        <Card title={logement.title} />
      ))}
    </>
  );
}
