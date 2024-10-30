import React from "react";

export default function Synonym(props) {
  console.log(props);
  if (props.synonym) {
    return (
      <ul className="Synonym">
        <strong>Synonym:</strong>
        {props.synonym.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
