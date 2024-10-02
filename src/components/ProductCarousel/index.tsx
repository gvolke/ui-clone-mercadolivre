import React, { useState, useCallback } from "react";
import blacktshirt from "../../assets/black-tshirt.png";
import {
  Carousel,
  CarouselButton,
  Container,
  CarouselContainer,
  CarouselItem,
  ArrowLeftIcon,
  ArrowRightIcon,
  ProductInfo,
} from "./styles";

const products = [
  { id: 1, name: "Produto 1 Camiseta 100% algodão", image: blacktshirt },
  { id: 2, name: "Produto 2 Camiseta 100% algodão", image: blacktshirt },
  { id: 3, name: "Produto 3 Camiseta 100% algodão", image: blacktshirt },
  { id: 4, name: "Produto 4 Camiseta 100% algodão", image: blacktshirt },
  { id: 5, name: "Produto 5 Camiseta 100% algodão", image: blacktshirt },
  { id: 6, name: "Produto 6 Camiseta 100% algodão", image: blacktshirt },
  { id: 7, name: "Produto 7 Camiseta 100% algodão", image: blacktshirt },
  { id: 8, name: "Produto 8 Camiseta 100% algodão", image: blacktshirt },
  { id: 9, name: "Produto 9 Camiseta 100% algodão", image: blacktshirt },
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
    <Container>
      <h2>Produtos Relacionados</h2>

      <CarouselContainer>
        <CarouselButton
          className="prev"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <ArrowLeftIcon />
        </CarouselButton>

        <Carousel>
          {visibleProducts.map((product) => (
            <CarouselItem key={product.id}>
              <img src={product.image} alt={product.name} />
              <Info productname={product.name} />
            </CarouselItem>
          ))}
        </Carousel>

        <CarouselButton
          className="next"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <ArrowRightIcon />
        </CarouselButton>
      </CarouselContainer>
    </Container>
  );
};

const Info = ({ productname }: { productname: string }) => {
  return (
    <ProductInfo>
      <div className="old-price">R$ 54,90</div>

      <div className="current-price">
        R$ 32 <span>99</span> <span>39% OFF</span>
      </div>

      <div className="parcels">em 12x R$ 3,20</div>

      <div className="shipping">
        <span>Frete grátis</span> por ser sua primeira compra
      </div>

      <div className="product">{productname}</div>
    </ProductInfo>
  );
};

export default ProductCarousel;
