import React from "react";
import {
  TableContainer,
  TableRow,
  Container,
  MainFeatures,
  OtherFeatures,
  FeaturesContainer,
} from "./styles";

const ProductFeatures = () => {
  const main = [
    { label: "Marca", value: "Hering" },
    { label: "Modelo", value: "Camiseta Algodão" },
    { label: "Gênero", value: "Masculino" },
    { label: "Idade", value: "Adultos" },
    { label: "Tipo de Roupa", value: "Camiseta" },
  ];

  const others = [
    { label: "É esportiva", value: "Sim" },
    { label: "Composição", value: "Algodão" },
    { label: "Material Principal", value: "Algodão" },
    { label: "Tipo de Manga", value: "Curta" },
    { label: "Tipo de Gola", value: "Redonda" },
    { label: "Com materiais Reciclados", value: "Não" },
  ];

  return (
    <Container>
      <h2>Características do Produto</h2>

      <div className="tableContainer">
        <MainFeatures>
          <p>Características Principais</p>
          <FeaturesContainer>
            <TableContainer className="left-container">
              {main.map((item, index) => (
                <TableRow key={index}>
                  <p>{item.label}</p>
                </TableRow>
              ))}
            </TableContainer>
            <TableContainer className="right-container">
              {main.map((item, index) => (
                <TableRow key={index}>
                  <p>{item.value}</p>
                </TableRow>
              ))}
            </TableContainer>
          </FeaturesContainer>
        </MainFeatures>

        <OtherFeatures>
          <p>Outras Características</p>
          <FeaturesContainer>
            <TableContainer className="left-container">
              {others.map((item, index) => (
                <TableRow key={index}>
                  <p>{item.label}</p>
                </TableRow>
              ))}
            </TableContainer>
            <TableContainer className="right-container">
              {others.map((item, index) => (
                <TableRow key={index}>
                  <p>{item.value}</p>
                </TableRow>
              ))}
            </TableContainer>
          </FeaturesContainer>
        </OtherFeatures>
      </div>
    </Container>
  );
};

export default ProductFeatures;
