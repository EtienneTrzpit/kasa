import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import "../assets/style/info.scss";
import Accordion from "./Accordion";

export default function MainLocation() {
  const { id } = useParams();
  let logementSelectionne = null;
  // boucle sur le tableau logements pour trouver le logement dont l'id correspond à celui passé dans l'url
  for (let logement of logements) {
    if (logement.title === id) {
      logementSelectionne = logement;
    }
  }
  return (
    <>
      <div className="location-info location-presentation">
        <h1 className="location-title">{logementSelectionne.title}</h1>
        <span className="landlord">
          <p>{logementSelectionne.host["name"]}</p>
          <img
            className="picture"
            src={logementSelectionne.host["picture"]}
            alt={logementSelectionne.host["name"]}
          />
        </span>
      </div>
      <div className="location-info">
        <p>{logementSelectionne.location}</p>
      </div>
      <div className="location-info">
        <ul className="list-info">
          {/* boucle sur les tags du logement pour les afficher */}
          {logementSelectionne.tags.map((tag, index) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <span>
          {/* boucle pour afficher les étoiles remplis correspondant au rating du logement */}
          {Array.from({ length: logementSelectionne.rating }).map(
            (_, index) => (
              <span key={index} className="star filled">
                &#9733;
              </span>
            )
          )}
          {/* boucle pour afficher les étoiles vides correspondant au rating du logement */}
          {Array.from({ length: 5 - logementSelectionne.rating }).map(
            (_, index) => (
              <span key={index} className="star empty">
                &#9734;
              </span>
            )
          )}
        </span>
      </div>
      <div className="location-info location-accordions">
        <Accordion
          accordionTitle={["Description"]}
          accordionContent={[logementSelectionne.description]}
        />
        <Accordion
          accordionTitle={["Équipements"]}
          accordionContent={
            <ul className="list-equipements">
              {/* boucle sur les équipements du logement pour les afficher */}
              {logementSelectionne.equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          }
        />
      </div>
    </>
  );
}
