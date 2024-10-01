import React from "react";

import {
  Container,
  Seller,
  SellerStatus,
  SellerStatusIcon,
  ReputationCard,
  ReputationTermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  Button,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Seller>
        Vendido por SILKSHIRTS
        <p>
          <span>+25</span> produtos
        </p>
      </Seller>

      <SellerStatus>
        <div>
          <SellerStatusIcon />
        </div>
        <div>
          <div className="title">MercadoLíder</div>
          <div className="subtitle">É um dos melhores do site!</div>
        </div>
      </SellerStatus>

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
            <span>Vendas concluídas</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Oferece um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Entrega os produtos dentro do prazo</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <Button> Ver mais produtos do vendedor</Button>
    </Container>
  );
};

export default SellerInfo;
