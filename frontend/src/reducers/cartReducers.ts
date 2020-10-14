import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action: any) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existitem: any = state.cartItems.find(
        (x: any) => x.product === item.product
      );

      if (existitem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.product === existitem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x: any) => x.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
