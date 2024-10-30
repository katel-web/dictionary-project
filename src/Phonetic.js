import React from "react";

export default function Phonetic(props) {
  console.log(props);
  if (props) {
    return <div className="Phonetic">hello {props.phonetic}</div>;
  } else {
    return null;
  }
}
