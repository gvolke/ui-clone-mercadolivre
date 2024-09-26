import React from "react";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import ProductViewer from "../ProductViewer";

import { Container, Row, Panel, Column, Section, Description } from "./styles";

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

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com Lorem Ipsum</p>
          <p className="description">
            Receba o produto que está esperando ou devolvemos o seu dinheiro
          </p>
        </span>
        <span>
          <p className="title">Garantia do Vendedor</p>
          <p className="description">sem garantia</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
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
