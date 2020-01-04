import { typedAction } from "../helpers";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "..";
import { sampleProducts } from "../../data/sampleProducts";

const initialState: ProductState = { products: [], loading: false, cart: [] };

const setProducts = (products: Product[]) => {
  return typedAction("products/SET_PRODUCTS", products);
};

export const addToCart = (product: Product, quantity: number) => {
  return typedAction("products/ADD_TO_CART", { product, quantity });
};

export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    setTimeout(() => {
      dispatch(
        setProducts([...getState().products.products, ...sampleProducts])
      );
    }, 500);
  };
};

type ProductAction = ReturnType<typeof setProducts | typeof addToCart>;

export function productsReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "products/SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "products/ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.product.id,
            quantity: action.payload.quantity
          }
        ]
      };
    default:
      return state;
  }
}
