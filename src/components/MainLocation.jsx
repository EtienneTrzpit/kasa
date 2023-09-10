import logements from "../data/logements.json";

export default function MainLocation(name) {
  let location = logements.map((logement) => {
    if (logement.title === name) {
      return logement;
    } else {
      return null;
    }
  });
  return <h1>{location.title}</h1>;
}
