import logements from "../data/logements.json";
import { Navigate, useParams } from "react-router-dom";
import "../assets/style/info.scss";
import "../assets/style/banner.scss";
import Accordion from "../components/Accordion";
import ImageSlider from "../components/ImageSlider";

export default function Location() {
  const { id } = useParams();
  let logementSelectionne = null;
  let images;
  // boucle sur le tableau logements pour trouver le logement dont l'id correspond à celui passé dans l'url
  for (let logement of logements) {
    if (logement.title === id) {
      logementSelectionne = logement;
      images = logement.pictures;
    }
  }

  // si aucun logement n'est trouvé, on affiche un message d'erreur
  if (logementSelectionne === null) {
    return <Navigate to="*" />;
  }
  // si un logement est trouvé, on affiche ses informations
  else {
    function getTitleClass() {
      let titleClass;
      switch (true) {
        case window.innerWidth < 370:
          titleClass = "landlord xsmall-screen ";
          break;
        case window.innerWidth < 389:
          titleClass = "landlord small-screen";
          break;
        case window.innerWidth < 410:
          titleClass = "landlord small2-screen";
          break;
        case window.innerWidth < 432:
          titleClass = "landlord medium-screen";
          break;
        default:
          titleClass = "landlord";
          break;
      }
      if (logementSelectionne.title.length > 30 && window.innerWidth < 380) {
        titleClass += " bottom";
      } else if (logementSelectionne.title.length > 32) {
        titleClass += " bottom";
      }
      return titleClass;
    }
    return (
      <main className="main-location">
        <div id="banner">
          <ImageSlider images={images} />
        </div>
        <div className="location-info location-presentation">
          <h1 className="location-title">{logementSelectionne.title}</h1>
          <span className={getTitleClass()}>
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
          <span className="rating">
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
      </main>
    );
  }
}
