import React, { useState } from "react";

import tshirtImage from "../../assets/tshirt.png";
import tshirtSize from "../../assets/Camiseta Medidas.jpg";
import tshirtBack from "../../assets/Camiseta Costas.jpg";

import {
  Container,
  Thumbnails,
  Thumbnail,
  ImageContainer,
  LargeImage,
  ZoomWindow,
  ZoomImage,
} from "./styles";

const images = [
  { file: tshirtImage, alt: "camiseta branca" },
  { file: tshirtBack, alt: "camiseta costas" },
  { file: tshirtSize, alt: "medidas do produto" },
];

const ProductViewer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].file);
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;

    const { left, top, width, height } = target.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;

    let positionX = (x / width) * 800 - 182.5; // Ajusta para manter o zoom centrado
    let positionY = (y / height) * 800 - 200;

    positionX = Math.max(Math.min(positionX, 800 - 400), 0);
    positionY = Math.max(Math.min(positionY, 800 - 400), 0);

    setZoomPosition({ x: positionX, y: positionY });
  };

  const handleMouseEnter = () => {
    setIsZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setIsZoomVisible(false);
  };

  return (
    <Container>
      <Thumbnails>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.file}
            alt={image.alt}
            onMouseEnter={() => setSelectedImage(image.file)}
            isActive={selectedImage === image.file}
          />
        ))}
      </Thumbnails>

      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <LargeImage src={selectedImage} alt="Imagem grande do produto" />
      </ImageContainer>

      {isZoomVisible && (
        <ZoomWindow>
          <ZoomImage
            src={selectedImage}
            alt="Zoom do produto"
            style={{
              transform: `translate(-${zoomPosition.x}px, -${zoomPosition.y}px)`,
            }}
          />
        </ZoomWindow>
      )}
    </Container>
  );
};

export default ProductViewer;
