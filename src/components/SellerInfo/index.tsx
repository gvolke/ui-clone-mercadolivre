import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationTermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationTermometer>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationTermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
