import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
  console.log(props.result);

  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h3>{props.result.word}</h3>
          <Phonetic phonetic={props.result.phonetic} />
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
