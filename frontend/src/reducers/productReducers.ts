import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

// type Products = {
//   rating: number,
//   numreviews: number,
//   price: number,
//   countInStock: number,
//   _id: string,
//   name: string,
//   image: string,
//   description: string,
//   brand: string,
//   category: string,
//   user: string,
//   reviews: [],
//   createdAt: Date,
//   updatedAt: Date
// }

export const productListReducer = (state = { products: [] }, action: any) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
