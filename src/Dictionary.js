import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiKey = `8ff30efd06o4d12f7ftb8b44c4ad300b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    axios.get(apiUrl).then(handleResponse);
  }

  function runKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="form">
        <form onSubmit={search}>
          <input type="search" onChange={runKeywordChange} />
        </form>
      </div>
    </div>
  );
}
