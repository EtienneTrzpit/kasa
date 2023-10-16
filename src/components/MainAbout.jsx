import Accordion from "./Accordion";

export default function MainAbout() {
  let accordionTitle = ["Fiabilité", "Respect", "Service", "Sécurité"];
  let accordionContent = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bienà l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];
  return (
    <div className="accordions about">
      {accordionTitle.map((title, index) => {
        return (
          <Accordion
            key={index}
            accordionTitle={title}
            accordionContent={accordionContent[index]}
          />
        );
      })}
    </div>
  );
}
