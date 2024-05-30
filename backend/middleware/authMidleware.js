import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;