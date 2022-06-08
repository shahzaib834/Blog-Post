const jwt = require('jsonwebtoken');
const Author = require('../Models/authorModel');

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        req.user = await Author.findById(decoded.id).select('-password');

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not Authorized , token failed');
      }
    }

    if (!token) {
      res.status(401);
      throw new Error('Not Authorized , no token');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = protect;
