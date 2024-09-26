import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  StarIcon,
  DownIcon,
  Stars,
  PriceCard,
  DeliveryInfo,
  PriceRow,
  InstallementsInfo,
  PaymentInfo,
  StockStatus,
  Amount,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
  InfoIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>
        Novo | +50 vendidos
        <HeartIcon />
      </Condition>

      <Row>
        <h1>Camiseta Branca Hering</h1>
      </Row>

      <Stars>
        <p>5.0</p>

        <span>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>

        <p>(71)</p>
      </Stars>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">49</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallementsInfo>
          em <span className="text">4x R$ 12</span>
          <span className="cents">49</span>
          <span className="text"> sem juros</span>
        </InstallementsInfo>

        <PaymentInfo>Ver os meios de pagamento</PaymentInfo>
      </PriceCard>

      <DeliveryInfo>
        <div>
          <p className="title">
            <span>Chegerá grátis amanhã</span> por ser sua primeira compra
          </p>
          <p className="description">
            Comprando dentro das próximas <span>3 h 42 min</span>
          </p>
          <a href="#">Mais formas de entrega</a>
        </div>

        <div>
          <p className="title">
            <span>Retire grátis a partir de amanhã</span> em uma agência Mercado
            Livre
          </p>
          <p className="description">
            Comprando dentro das próximas <span>3 h 42 min</span>
          </p>
          <a href="#">Ver no Mapa</a>
        </div>
      </DeliveryInfo>

      <StockStatus>Estoque disponível</StockStatus>

      <Amount>
        <span>Quantidade: </span>
        <span> 1 unidade</span>
        <DownIcon />
        <span>(+10 disponíveis)</span>
      </Amount>

      <Actions>
        <Button solid> Comprar Agora</Button>
        <Button> Adicionar ao carrinho</Button>

        <Benefits>
          <li>
            <ShieldIcon />
            <p>
              <span>Compra Garantida</span>, receba o produto que está esperando
              ou devolvemos o seu dinheiro.
            </p>
          </li>
          <li>
            <InfoIcon />
            <p>3 meses de garantia de fábrica</p>
          </li>
        </Benefits>
      </Actions>
    </Container>
  );
};

export default ProductAction;
