import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import "../assets/style/card.scss";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="articles">
        {logements.map((logement) => (
          <Card title={logement.title} key={logement.title} />
        ))}
      </div>
    </main>
  );
}
