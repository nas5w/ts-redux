import React, { useState } from "react";
import { Form, Input, Button, Icon, Message } from "semantic-ui-react";
import { addToCart } from "../../../redux/modules/products";
import { connect } from "react-redux";

const mapDispatchToProps = { addToCart };

type OwnProps = {
  product: Product;
};

type Props = typeof mapDispatchToProps & OwnProps;

const UnconnectedAddForm: React.FC<Props> = ({ addToCart, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const add = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    setAdded(true);
  };

  return added ? (
    <Message color="green">
      Added{" "}
      <strong>
        {quantity} {product.name}
      </strong>{" "}
      to your cart!
    </Message>
  ) : (
    <Form>
      <Form.Field>
        <Input
          type="number"
          label="Quantity"
          value={quantity}
          onChange={e => setQuantity(Math.max(Number(e.target.value), 1))}
          fluid
        />
      </Form.Field>
      <Button onClick={add}>
        <Icon name="plus cart" />
        Add to cart
      </Button>
    </Form>
  );
};

export const AddForm = connect(null, mapDispatchToProps)(UnconnectedAddForm);
