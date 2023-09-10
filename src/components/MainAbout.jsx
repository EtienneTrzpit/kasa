import "../assets/style/accordion.scss";
import { useState } from "react";

export default function MainAbout() {
  let accordionTitle = ["Fiabilité", "Respect", "Service", "Sécurité"];
  let accordionContent = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bienà l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="accordions">
      {accordionTitle.map((title, index) => (
        <div className="accordion" key={title}>
          <div className="accordion-title">
            {title}
            <span
              className={selected === index ? "arrow-down" : "arrow-up"}
              onClick={() => toggle(index)}
            ></span>
          </div>
          <div className={selected === index ? "wrapper is-open" : "wrapper"}>
            <div className="accordion-content">{accordionContent[index]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
