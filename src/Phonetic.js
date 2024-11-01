import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props);
  if (props) {
    return <div className="Phonetic">/{props.phonetic}/</div>;
  } else {
    return null;
  }
}
