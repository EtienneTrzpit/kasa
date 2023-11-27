import Card from "../components/Card";
import logements from "../data/logements.json";
import "../assets/style/card.scss";
import "../assets/style/banner.scss";

export default function Home() {
  if (!Array.isArray(logements)) {
    console.error("logements is not defined or not an array");
    return null;
  }
  return (
    <>
      <h1 className="banner">Chez vous, partout et ailleurs</h1>
      <main>
        <div className="articles">
          {logements.map((logement) => (
            <Card title={logement.title} key={logement.title} />
          ))}
        </div>
      </main>
    </>
  );
}
