import React from "react";
import { Card, Image } from "semantic-ui-react";
import { priceFormat } from "../../../helpers/priceFormat";
import { AddForm } from "./AddForm";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card>
      <Image src={product.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Description>{priceFormat(product.price)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <AddForm product={product} />
      </Card.Content>
    </Card>
  );
};
