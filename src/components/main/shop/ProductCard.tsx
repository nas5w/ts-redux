import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { priceFormat } from "../../../helpers/priceFormat";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => (
  <Card>
    <Image
      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{product.name}</Card.Header>
      <Card.Description>{priceFormat(product.price)}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="plus cart" />
      Add to cart
    </Card.Content>
  </Card>
);
