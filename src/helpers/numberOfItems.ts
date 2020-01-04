import { RootState } from "../redux";

export const numberOfItems = (state: RootState) => {
  return state.products.cart.reduce((acc, el) => acc + el.quantity, 0);
};
