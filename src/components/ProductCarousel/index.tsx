import React, { useState, useCallback } from "react";
import blacktshirt from "../../assets/black-tshirt.png";
import {
  Carousel,
  CarouselButton,
  CarouselContainer,
  CarouselItem,
} from "./styles";

const products = [
  { id: 1, name: "Produto 1", image: blacktshirt },
  { id: 2, name: "Produto 2", image: blacktshirt },
  { id: 3, name: "Produto 3", image: blacktshirt },
  { id: 4, name: "Produto 4", image: blacktshirt },
  { id: 5, name: "Produto 5", image: blacktshirt },
  { id: 6, name: "Produto 6", image: blacktshirt },
  { id: 7, name: "Produto 7", image: blacktshirt },
  { id: 8, name: "Produto 8", image: blacktshirt },
];

const ProductCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Número de produtos visíveis por vez

  const totalPages = Math.ceil(products.length / itemsPerPage); // Total de páginas

  const handleNext = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  // Cálculo para exibir produtos atuais no carrossel
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length); // Garante que não ultrapasse o número de produtos
  console.log("start index: " + startIndex + " end index: " + endIndex);
  const visibleProducts = products.slice(startIndex, endIndex); // Retorna os produtos visíveis
  console.log(visibleProducts);

  return (
    <CarouselContainer>
      <CarouselButton
        className="prev"
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        {"<"}
      </CarouselButton>

      <Carousel>
        {visibleProducts.map((product) => (
          <CarouselItem key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </CarouselItem>
        ))}
      </Carousel>

      <CarouselButton
        className="next"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
      >
        {">"}
      </CarouselButton>
    </CarouselContainer>
  );
};

export default ProductCarousel;
