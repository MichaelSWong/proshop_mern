import React, { useEffect, useState, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { IProductDetailProps } from '../interfaces/interfaces';
import { listProductDetails } from '../actions/productActions';

import Loader from '../components/Loader';
import Message from '../components/Message';

interface ProductComponentProps extends RouteComponentProps<any> {}

const ProductScreen: FunctionComponent<ProductComponentProps> = ({
  history,
  match,
}) => {
  const [qty, setQty] = useState<any>(1);

  const dispatch = useDispatch();

  const productDetails = useSelector(
    (state: IProductDetailProps) => state.productDetails
  );
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  console.log('PRODUCT_MATCH', match.path);
  console.log('PRODUCT_HISTORY', history);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-light-my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product?.image} alt={product?.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product!.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product!.rating}
                  text={`${product!.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product!.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product!.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* TODO Add to Cart */}
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product!.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {
                            //@ts-ignore
                            [...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                          }
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {(product!.countInStock as number) > 0
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </Col>
                  </Row>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={product!.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
