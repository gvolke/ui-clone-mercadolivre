import styled, { css } from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface CarrouselProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const iconStyles = css`
  width: 32px;
  height: 32px;
  box-sizing: bor;
  color: var(--color-blue);
  cursor: pointer;
`;

export const ArrowLeftIcon = styled(HiOutlineChevronLeft)`
  ${iconStyles}
`;

export const ArrowRightIcon = styled(HiOutlineChevronRight)`
  ${iconStyles}
`;

export const Container = styled.div`
  border-top: 1px solid var(--color-border);
  margin: 0 15px 0 30px;

  h2 {
    margin: 10px 0px 0px 10px;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const CarrouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  h2 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Carrousel = styled.div`
  display: flex;
  overflow: hidden; /* Esconder produtos que estão fora da área visível, que é manipulada pelo transform no eixo X */
  width: 100%;
  margin-top: 40px;
  position: relative;
`;

export const CarrouselTrack = styled.div<CarrouselProps>`
  display: flex;
  transition: transform 0.5s ease-in-out; /* Animação de deslizar */
  transform: ${(props) =>
    `translateX(-${
      props.currentPage * 100
    }%)`}; /* Mover os itens com base na página atual. Mexe no eixo X 100 multiplicado pela página atual. Esse 100 representa 100% da página atual do carrossel. É como se fosse deixar 100% da track para fora do eixo X*/
  width: ${(props) =>
    `${
      props.totalItems * (100 / props.itemsPerPage)
    }%`}; /* Ajustar a largura total da track do carrossel com base no número de itens, para que apareça os itemsPerPage especificados em cada página. 100 representa novamente a largura total do container, divindo ela pelos itens por página e multiplicando pelo total da pra saber a largura que a track tem que ter */
`;

export const CarrouselItem = styled.div`
  cursor: pointer;
  width: 50px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  min-width: calc(
    33.333% - 20px
  ); /*Cálculo da lágura mínima como são 3 itens por página 33.33% e desconta os 20px de margin (10px da esquerda e 10px da direita)*/
  text-align: center;
  margin: 0 10px 10px 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    border-bottom: 1px solid var(--color-border);
  }

  &:hover {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const CarrouselButton = styled.button`
  border-radius: 50%;
  width: 64px;
  height: 64px;

  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 54%;
  transform: translateY(-50%);
  z-index: 1;

  margin-right: 30px;
  margin-left: 30px;

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }

  /*Se o número de páginas for igual à página atual é passada a propriedade disabled como true, para fazer o botão de passar a página do carrossel sumir*/
  &:disabled {
    visibility: collapse;
  }

  &.prev {
    left: -50px;
  }

  &.next {
    right: -50px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;

  text-align: left;

  .old-price {
    font-size: 12px;
    color: var(--color-gray);
    text-decoration: line-through;

    margin-bottom: 3px;
  }

  .current-price {
    display: flex;
    align-items: flex-start;

    font-weight: 600;
    font-size: 24px;
    margin-bottom: 3px;

    span {
      font-size: 12px;
      margin-top: 2px;
    }

    span + span {
      font-size: 14px;
      color: var(--color-green);
      align-self: center;
      margin-left: 12px;
    }
  }

  .parcels {
    font-size: 13px;
    margin-bottom: 15px;
  }

  .shipping {
    font-size: 13px;
    color: var(--color-gray);
    margin-bottom: 15px;

    span {
      font-weight: 600;
      color: var(--color-green);
    }
  }

  .product {
    font-size: 13px;
  }
`;
