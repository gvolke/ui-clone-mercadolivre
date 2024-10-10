import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 16px;
  margin-bottom: 10px;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }
  }
`;

export const Panel = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--panel-shadow);

  /* Definição do display em grid, demonstrando que a primeira coluna vai ocupar uma fração de 67 do espaço disponível e a segunda vai ficar com o restante: 33 */
  display: grid;
  grid-template-columns: 67fr 33fr;
`;

export const Column = styled.div``;

export const Payment = styled.div`
  border: 1px solid var(--color-border);
  margin: 15px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    padding: 32px 16px;
    flex-direction: column;
    border-bottom: 1px solid var(--color-border);
    gap: 24px;

    h4 {
      font-weight: 400;
      font-size: 18px;
      color: var(--color-black);
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      color: var(--color-black);
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 24px;
    }

    p {
      font-size: 14px;
      color: var(--color-lightgray);
    }

    span {
      img {
        margin-top: 12px;
      }
    }

    a {
      text-decoration: none;
      font-size: 14px;
      color: var(--color-blue);
    }
  }
`;

export const Description = styled.div`
  margin: 0px 15px 0px 30px;
  border-top: 1px solid var(--color-border);

  padding: 40px 0px 30px 0px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;
