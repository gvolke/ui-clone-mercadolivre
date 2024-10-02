import styled, { css } from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

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

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  h2 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;

  margin-top: 40px;
`;

export const CarouselItem = styled.div`
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  min-width: calc(33.333% - 20px);
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

export const CarouselButton = styled.button`
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
