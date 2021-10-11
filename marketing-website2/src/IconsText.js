import React from "react";
import expand from "./expand.png";

export const IconsText = ({ h1, p, img }) => {
  return (
    <>
      <img src={img} />
      <h1>{h1}</h1>
      <p>{p}</p>
      <img src={expand} />
    </>
  );
};
