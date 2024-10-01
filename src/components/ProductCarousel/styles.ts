import styled from "styled-components";

export const CarouselContainer = styled.div`
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  position: relative;

  h2 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Carousel = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
  width: 100%;

  margin-top: 40px;
`;

export const CarouselItem = styled.div`
  min-width: calc(33.333% - 20px);
  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CarouselButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

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
