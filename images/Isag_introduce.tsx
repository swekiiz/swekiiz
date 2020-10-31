import React from "react";
import { css } from "../lib";

export function Isag_introduce() {
  const style = css`
    @font-face {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      src: url("../assets/fonts/montserrat-v15-latin-700.eot");
      src: local("Montserrat Bold"), local("Montserrat-Bold"),
        url("../assets/fonts/montserrat-v15-latin-700.eot?#iefix")
          format("embedded-opentype"),
        url("../assets/fonts/montserrat-v15-latin-700.woff2") format("woff2"),
        url("../assets/fonts/montserrat-v15-latin-700.woff") format("woff")
          url("../assets/fonts/montserrat-v15-latin-700.ttf") format("truetype"),
        url("../assets/fonts/montserrat-v15-latin-700.svg#Montserrat")
          format("svg");
    }
  `;
  return (
    <svg
      width="1920px"
      height="4096px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <style type="text/css">{style}</style>
      <rect width="100%" height="100%" fill="black" />
      <text
        id="text"
        fontSize="200"
        fontFamily="Montserrat"
        x="50%"
        y="56%"
        fill="white"
        textAnchor="middle"
      >
        Hello
      </text>
    </svg>
  );
}
