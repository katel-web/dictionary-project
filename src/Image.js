import React from "react";
import "./Image.css";

export default function Image(props) {
  if (props.image) {
    //console.log(props.image.photos);
    return (
      <section className="Photos">
        <div className="row mt-3">
          {props.image.photos.map(function (image, index) {
            return (
              <div className="col-4 photo" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img src={image.src.landscape} className="img-fluid" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
