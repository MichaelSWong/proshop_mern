import React, { FunctionComponent } from 'react';
import { Alert } from 'react-bootstrap';

type MessageProps = {
  variant: string;
};

const Message: FunctionComponent<MessageProps> = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
