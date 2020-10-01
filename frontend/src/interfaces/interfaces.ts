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
  value: number;
  text: string;
  color: string;
}
