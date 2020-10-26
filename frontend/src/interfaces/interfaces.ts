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

export interface IUser {
  email: string;
  password: string;
  name?: string;
  id?: string;
  _id?: string;
}

export interface ILoginProps {
  userInfo: IUser;
}
export interface ILoginUser extends ILoginProps {
  loading: boolean;
  error: Error;
}
export interface ILoginUserProps {
  userLogin: ILoginUser;
}

export interface IRegisterProps {
  userInfo: IUser;
}

export interface IRegisterUser extends IRegisterProps {
  loading: boolean;
  error: Error;
}

export interface IRegisterUserProps {
  userRegister: IRegisterUser;
}

export interface IProfileProps {
  user: IUser;
}

export interface IUserDetails extends IProfileProps {
  loading: boolean;
  error: Error;
}

export interface IUserDetailsProps {
  userDetails: IUserDetails;
}

export interface IUserUpdateProps {
  success: boolean;
}

export interface IUserUpdateProfileProps {
  userUpdateProfile: IUserUpdateProps;
}

export interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IShippingAddressProps {
  cartItems: IItem;
  shippingAddress: IShippingAddress;
}

export interface ICartProps {
  cart: IShippingAddressProps;
}
