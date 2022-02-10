import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import lrgFam from "./imgs/large-family-5017069.jpg";
import fam from "./imgs/family-467852101.jpg";
import bench from "./imgs/bench-family-426510.jpg";
import smlFam from "./imgs/small-family-856401.jpg";

export default class ImgCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3200}
        stopOnHover={false}
      >
        <div>
          <img src={lrgFam} />
        </div>
        <div>
          <img src={fam} />
        </div>
        <div>
          <img src={bench} />
        </div>
        <div>
          <img src={smlFam} />
        </div>
      </Carousel>
    );
  }
}

// ReactDOM.render(<ImgCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
