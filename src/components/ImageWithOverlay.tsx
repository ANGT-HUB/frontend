import React from "react";
import { ImageContainer, Overlay } from "../Styles";
import { AdminImageProps } from "../types/inputTypes";

const ImageWithOverlay = ({ source, altText }: AdminImageProps) => {
  return (
    <ImageContainer>
      <img src={source} alt={altText} />
      <Overlay />
    </ImageContainer>
  );
};

export default ImageWithOverlay;
