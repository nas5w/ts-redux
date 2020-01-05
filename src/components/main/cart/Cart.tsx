import React from "react";
import { Container, Header } from "semantic-ui-react";
import { CartItems } from "./CartItems";

export const Cart: React.FC = () => {
  return (
    <Container>
      <Header as="h2">Cart</Header>
      <CartItems />
    </Container>
  );
};
