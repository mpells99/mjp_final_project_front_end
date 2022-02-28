import React from "react";
import { CalendarJS } from "../calendar/calendar";
import ImgCarousel from "../carousel/img-carousel";

// import PortfolioContainer from "../portfolio/portfolio-container";

export default function () {
  return (
    <div>
      {/* <PortfolioContainer /> */}
      <ImgCarousel />
      <CalendarJS />
    </div>
  );
}
