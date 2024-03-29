import React, {
  useState,
  FormEvent,
  FunctionComponent,
  ChangeEvent,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';
import { ICartProps } from '../interfaces/interfaces';

interface PaymentComponentProps extends RouteComponentProps<any> {}

const PaymentScreen: FunctionComponent<PaymentComponentProps> = ({
  history,
}) => {
  // add props
  const cart = useSelector((state: ICartProps) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setpaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="Paypal"
              checked
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setpaymentMethod(e.target.value)
              }
            ></Form.Check>
            {/* <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setpaymentMethod(e.target.value)
              }
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
