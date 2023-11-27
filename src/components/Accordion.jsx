import "../assets/style/accordion.scss";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Accordion({ accordionTitle, accordionContent }) {
  const [selected, setSelected] = useState(null);
  const toggle = () => {
    selected === null ? setSelected(0) : setSelected(null);
  };
  const accordion = useRef();
  const location = useLocation();
  useEffect(() => {
    if (
      selected === 0 &&
      location.pathname.startsWith("/location") &&
      window.innerWidth > 768
    ) {
      accordion.current.style.height = `200px`;
      console.log("true");
    } else if (selected === 0) {
      accordion.current.style.height = `${accordion.current.scrollHeight}px`;
    } else {
      accordion.current.style.height = "0px";
    }
  }, [selected]);
  return (
    <div
      className={selected === 0 ? "accordion active" : "accordion"}
      key={accordionTitle}
    >
      <div className="accordion-title">
        {accordionTitle}
        <span
          className={
            selected === 0 ? "arrow-accordion down" : "arrow-accordion up"
          }
          onClick={() => toggle()}
        ></span>
      </div>
      <div className="accordion-content" ref={accordion}>
        {accordionContent}
      </div>
    </div>
  );
}
