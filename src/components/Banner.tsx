import { Fragment } from "react";
import firstPic from "../assets/CMT09352-Enhanced-NR.jpg";
import secondPic from "../assets/CMT09563.jpg";

import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={firstPic} className="banner-image cropped-image" />
        <Carousel.Caption>
          <div className="double-header">
            <div style={{ color: "#4340CF", textDecoration: "line-through" }}>
              <h1 className="real-big strikethrough" style={{ color: "white" }}>
                Fit In
              </h1>
            </div>
            <h1 className="real-big fit-out-banner">Fit. Out.</h1>
          </div>
          <h2 className="banner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ratione.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={secondPic} className="banner-image cropped-image" />
        <Carousel.Caption>
          <div className="double-header">
            <div style={{ color: "#4340CF", textDecoration: "line-through" }}>
              <h1 className="real-big strikethrough" style={{ color: "white" }}>
                Fit In
              </h1>
            </div>
            <h1 className="real-big fit-out-banner">Fit. Out.</h1>
          </div>
          <h2 className="banner-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
