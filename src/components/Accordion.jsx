import "../assets/style/accordion.scss";
import { useState } from "react";

export default function Accordion({ accordionTitle, accordionContent }) {
  const [selected, setSelected] = useState(null);
  const toggle = () => {
    selected === null ? setSelected(0) : setSelected(null);
  };
  return (
    <div className="accordion" key={accordionTitle}>
      <div className="accordion-title">
        {accordionTitle}
        <span
          className={selected === 0 ? "arrow-down" : "arrow-up"}
          onClick={() => toggle()}
        ></span>
      </div>
      <div className={selected === 0 ? "wrapper is-open" : "wrapper"}>
        <div className="accordion-content">{accordionContent}</div>
      </div>
    </div>
  );
}