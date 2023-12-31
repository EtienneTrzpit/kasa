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
      <main className="main-home">
        <div className="articles">
          {logements.map((logement) => (
            <Card
              title={logement.title}
              id={logement.id}
              cover={logement.cover}
              key={logement.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}
