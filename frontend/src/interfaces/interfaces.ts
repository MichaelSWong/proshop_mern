export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface IProductProps {
  product: IProduct;
}

type Color = 'red' | 'green' | 'blue' | 'yellow';

export interface IRatingsProps {
  value?: number;
  text?: string;
  color?: string;
}

export interface IProductDetails extends IProductProps {
  loading: boolean;
  error: Error;
}

export interface IProductDetailProps {
  productDetails: IProductDetails;
}

export interface ProductState {
  products: IProduct[];
}

export interface IItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}
