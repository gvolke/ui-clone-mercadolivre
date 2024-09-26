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
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
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
        onMouseEnter={() => setIsZoomVisible(true)}
        onMouseLeave={() => setIsZoomVisible(false)}
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
              transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
            }}
          />
        </ZoomWindow>
      )}
    </Container>
  );
};

export default ProductViewer;
