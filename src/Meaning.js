import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p className="definition">{props.meaning.definition}</p>
        <p className="example">{props.meaning.example}</p>
        <Synonym synonym={props.meaning.synonyms} />
      </section>
    </div>
  );
}
