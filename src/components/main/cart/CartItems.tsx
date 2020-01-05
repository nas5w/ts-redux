import React from "react";
import { RootState } from "../../../redux";
import { getCartItems, getTotalPrice } from "../../../helpers/getCartItems";
import { connect } from "react-redux";
import { Item, Header } from "semantic-ui-react";
import { priceFormat } from "../../../helpers/priceFormat";

const mapStateToProps = (state: RootState) => ({
  cartItems: getCartItems(state),
  totalPrice: getTotalPrice(state)
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedCartItems: React.FC<Props> = ({ cartItems, totalPrice }) => {
  return (
    <>
      <Item.Group divided>
        {cartItems.map(cartItem => (
          <Item key={cartItem.id}>
            <Item.Image size="tiny" src={cartItem.img} />
            <Item.Content>
              <Item.Header>{cartItem.name}</Item.Header>
              <Item.Meta>
                <span className="price">{priceFormat(cartItem.price)}</span>
              </Item.Meta>
              <Item.Description>Quantity: {cartItem.quantity}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      <Header as="h3">Total Price: {priceFormat(totalPrice)}</Header>
    </>
  );
};

export const CartItems = connect(mapStateToProps)(UnconnectedCartItems);
