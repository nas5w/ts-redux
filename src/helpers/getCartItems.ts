import { RootState } from "../redux";
import { createSelector } from "reselect";

type CheckoutItem = CartItem & Product;

export const getCartItems = (state: RootState): CheckoutItem[] => {
  return state.products.cart.reduce((acc, el) => {
    const associatedProduct = state.products.products.find(
      product => product.id === el.id
    ) as Product;
    acc.push({ ...el, ...associatedProduct });
    return acc;
  }, [] as CheckoutItem[]);
};

export const getTotalPrice = createSelector(getCartItems, cartItems => {
  return cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);
});
