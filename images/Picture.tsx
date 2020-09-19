import React from "react";
import { css } from "../lib";
export function Picture() {
  const style = css`
    @import url(https://fonts.googleapis.com/css?family=Montserrat:700);
  `;
  return (
    <svg
      width="1920px"
      height="1080px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <style type="text/css">{style}</style>
      <rect width="100%" height="100%" fill="hsla(0, 5%, 5%, 1)" />
      <text
        id="text"
        fontSize="342"
        fontFamily="Montserrat"
        fill="url(#skyGradient)"
        x="50%"
        y="56%"
        textAnchor="middle"
      >
        Hello
      </text>
      <path id="path">
        <animate
          attributeName="d"
          from="m0,760 h0"
          to="m0,760 h1920"
          dur="7s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <text
        fontSize="64"
        fontFamily="Montserrat"
        fill="url(#textGradient)"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path">
          I’m Thanadol && You can call me Best.
        </textPath>
      </text>
      <linearGradient id="skyGradient" x1="100%" y1="100%">
        <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
          <animate
            attributeName="stop-color"
            values="lightblue;blue;red;hsla(0, 5%, 5%, 1);hsla(0, 5%, 5%, 1);red;purple;white;white"
            dur="14s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
          <animate
            attributeName="stop-color"
            values="lightblue;orange;purple;hsla(0, 5%, 5%, 1);hsla(0, 5%, 5%, 1);purple;lightblue;white;white"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="offset"
            values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
            dur="14s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient id="textGradient" x1="100%" y1="100%">
        <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
          <animate
            attributeName="stop-color"
            values="lightblue;blue;red;white;white;red;purple;white;white"
            dur="14s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
          <animate
            attributeName="stop-color"
            values="lightblue;orange;purple;white;white;purple;lightblue;white;white"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="offset"
            values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
            dur="14s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </svg>
  );
}
