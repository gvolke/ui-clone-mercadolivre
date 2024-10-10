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
    /*e é o evento do mouse. O target é o elemento que disparou essa ação do mouse, no caso, uma div*/
    const target = e.target as HTMLDivElement;

    /*Obtendo informações sobre o tamanho do elemento (width e height) e a posição relativa à janela de visualização (left e top)*/
    const { left, top, width, height } = target.getBoundingClientRect();

    /*Aqui estão sendo calculadas as coordenadas do mouse em relação ao target (que é a div). e.pageX e e.pageY pegam as coordenadas do mouse em relação à div
    e left e top são subtraídos para ajustar as coordenadas à div target*/
    const x = e.pageX - left;
    const y = e.pageY - top;

    /*Esse trecho ajusta a visualização do zoom à div. Basicamente esta sendo feita uma escala para que o zoom fique correto na janela de visualização */
    let positionX = (x / width) * 800 - 182.5;
    let positionY = (y / height) * 800 - 200;

    /*Math.max e Math.min para garantir que positionX e positionY fiquem dentro do limite de 0 a 400 (tamanho da div). Isso evita que a posição fique fora da área visível ou em valores negativos. */
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
