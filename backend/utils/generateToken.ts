import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({ id }, String(process.env.JWT_TOKEN), {
    expiresIn: '30d',
  });
};

export default generateToken;
