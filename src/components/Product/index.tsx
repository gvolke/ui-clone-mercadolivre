import React from "react";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import ProductViewer from "../ProductViewer";
import ProductCarousel from "../ProductCarousel";

import hypercard from "../../assets/hypercard.svg";
import mastercard from "../../assets/mastercard.svg";
import elo from "../../assets/elo.svg";
import visa from "../../assets/visa.svg";
import pix from "../../assets/pix.svg";
import boleto from "../../assets/boleto.svg";

import { Container, Row, Panel, Column, Payment, Description } from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um Igual</a>
      </Row>

      <Panel>
        <Column>
          <ProductViewer />

          <ProductCarousel />

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <Payment>
            <div>
              <h4>Devolução Grátis</h4>
              <p>
                Você tem 30 dias a partir do recebimento do produto para
                devolvê-lo, não importa o motivo!
              </p>
              <a href="#">Ver mais sobre devoluções</a>
            </div>

            <div>
              <h4>Meios de pagamento</h4>

              <h5>Cartões de crédtio</h5>
              <ul>
                <li>
                  <img src={hypercard} alt="cartão hypercard" />
                </li>
                <li>
                  <img src={elo} alt="cartão elo" />
                </li>
                <li>
                  <img src={visa} alt="cartão visa" />
                </li>
                <li>
                  <img src={mastercard} alt="cartão mastercard" />
                </li>
              </ul>

              <span>
                <h5>Pix</h5>
                <img src={pix} alt="pix" />
              </span>

              <span>
                <h5>Boleto Bancário</h5>
                <img src={boleto} alt="boleto" />
              </span>

              <a href="#">Confira outros meios de pagamento</a>
            </div>
          </Payment>
        </Column>
      </Panel>
    </Container>
  );
};

const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        dicta numquam reiciendis nulla necessitatibus culpa id ab, voluptatum
        quasi fuga aliquid ducimus. Fugit, architecto obcaecati? Itaque eaque
        molestiae ut magni! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Earum ab illum quo magni tempore debitis sapiente nam quidem sint,
        possimus alias sequi delectus fugiat nisi labore aspernatur eos quam
        suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, enim
        numquam quos ipsam fugiat, totam repudiandae consequatur aut facere nemo
        tempore quidem. Nam dolorum neque debitis voluptate dolores, quaerat
        quis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        quas sit quos minima, quod reprehenderit voluptatibus nobis nostrum
        quam? Harum illum vero quam tempora architecto dolorem rem accusantium
        ullam itaque.
      </p>
    </Description>
  );
};

export default Product;
