import React, { useEffect, FunctionComponent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartAction';
import { RootState } from '../store';

interface CartComponentProps extends RouteComponentProps<any> {}

const CartScreen: FunctionComponent<CartComponentProps> = ({
  match,
  location,
  history,
}) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  console.log(qty);

  return <div>Cart</div>;
};

export default CartScreen;
