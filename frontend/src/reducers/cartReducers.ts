import { CART_ADD_ITEM } from '../constants/cartConstants';

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

    default:
      return state;
  }
};
