import React, { useState, useCallback } from "react";
import blacktshirt from "../../assets/black-tshirt.png";
import {
  Carrousel,
  CarrouselTrack,
  CarrouselButton,
  Container,
  CarrouselContainer,
  CarrouselItem,
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
  const itemsPerPage = 3; // Número de produtos visíveis por página do carrossel

  const totalPages = Math.ceil(products.length / itemsPerPage); // Total de páginas. Ceil retorna o menor número inteiro maior ou igual ao resultado. Por exemplo, se fosse 10 produtos divididos em 3 páginas o resultado seria 3,333. A função ceil vai retornar 4.

  const handleNext = useCallback(() => {
    // Se a página atual for menor que a última vai para a próxima
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    // Se a página atual não for a primeira volta para a anterior
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  return (
    <Container>
      <h2>Produtos Relacionados</h2>

      <CarrouselContainer>
        <CarrouselButton
          className="prev"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <ArrowLeftIcon />
        </CarrouselButton>

        <Carrousel>
          <CarrouselTrack
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
          >
            {products.map((product) => (
              <CarrouselItem key={product.id}>
                <img src={product.image} alt={product.name} />
                <Info productname={product.name} />
              </CarrouselItem>
            ))}
          </CarrouselTrack>
        </Carrousel>

        <CarrouselButton
          className="next"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <ArrowRightIcon />
        </CarrouselButton>
      </CarrouselContainer>
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
