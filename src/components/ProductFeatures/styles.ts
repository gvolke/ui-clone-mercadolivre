import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 15px 40px 30px;
  border-top: 1px solid var(--color-border);
  padding: 40px 0 0;

  h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .tableContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;

  .left-container {
    border-radius: 8px 0px 0px 8px;
    font-weight: 600;
  }

  .right-container {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const MainFeatures = styled.div`
  width: 50%;
  margin-right: 20px;

  p {
    margin-bottom: 16px;
  }
`;

export const OtherFeatures = styled.div`
  width: 50%;
  margin-left: 20px;

  p {
    margin-bottom: 16px;
  }
`;

export const TableContainer = styled.div`
  overflow: hidden;
  width: 50%;
`;

export const TableHeader = styled.div`
  background-color: #f5f5f5;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  height: 48px;

  font-size: 12px;

  &:last-child {
    border-bottom: none; // Remove a borda da última linha
  }

  &:nth-child(odd) {
    background-color: #e0e0e0; // Cor de fundo para linhas ímpares
  }

  &:nth-child(even) {
    background-color: #f9f9f9; // Cor de fundo para linhas pares (inversa)
  }
`;
