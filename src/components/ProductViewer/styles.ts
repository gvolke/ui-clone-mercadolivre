import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 44px 32px;
  height: 750px;

  display: flex;
  justify-content: space-between;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type ThumbnailProps = { isActive?: boolean };

export const Thumbnail = styled.img<ThumbnailProps>`
  width: 44px;
  height: 44px;
  object-fit: cover;
  cursor: pointer;
  border: ${({ isActive }) =>
    isActive ? "2px solid var(--color-blue)" : "2px solid transparent"};
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const LargeImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  cursor: zoom-in;
`;

export const ZoomWindow = styled.div`
  background-color: white;
  width: 365px;
  height: 400px;
  margin-left: 777px;
  margin-top: -30px;
  overflow: hidden;
  z-index: 10; /* Certifique-se de que a janela de zoom fique sobre os outros componentes */
  position: absolute;
  border: 1px solid var(--color-border);
`;

export const ZoomImage = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  object-fit: cover;
`;
