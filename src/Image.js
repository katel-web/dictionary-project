import React from "react";

export default function Image(props) {
  console.log(props.photos);
  if (props) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <img src={image.src.landscape} className="img-fluid" />
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
