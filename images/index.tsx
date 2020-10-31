import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Picture } from "./Picture";
import { Isag_introduce } from "./Isag_introduce"

const images: { [name: string]: React.FC } = { Picture, Isag_introduce };

export async function renderPicture(imageName: string) {
  const start = Date.now();
  let markup;
  while (true) {
    try {
      markup = renderToStaticMarkup(<Image name={imageName} />);
      break;
    } catch (error) {
      throw error;
    }
  }
  const finish = Date.now();
  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    markup +
    `<!-- rendered at ${new Date().toJSON()} in ${finish - start}ms -->`
  );
}

function Image(props: { name: string }) {
  const FoundImage = images.hasOwnProperty(props.name) && images[props.name];
  return FoundImage ? <FoundImage /> : <ImageNotFound name={props.name} />;
}

function ImageNotFound(props: { name: string }) {
  return (
    <svg
      width="512px"
      height="128px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <text x="0" y="15" fill="red">
        Image not found: {props.name}
      </text>
    </svg>
  );
}
