import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Image from "./Image";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setResult(response.data);
  }
  function handleImageResponse(props) {
    //console.log(props.data);
    setImage(props.data);
  }
  function search() {
    let apiKey = `8ff30efd06o4d12f7ftb8b44c4ad300b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "8ff30efd06o4d12f7ftb8b44c4ad300b";
    let imageApirUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    // documentation: https://www.shecodes.io/learn/apis/images
    axios.get(imageApirUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function runKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div className="instructions">
            <h2>What word do you want to look up?</h2>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="inputForm"
                onChange={runKeywordChange}
                defaultValue={props.defaultKeyword}
              />
              <input type="submit" className="searchButton" />
            </form>
            <div className="hint">Suggested words: yoga, sunrise, forest</div>
          </div>
        </section>
        <Result result={result} />
        <Image image={image} />
      </div>
    );
  } else {
    load();
  }
}
