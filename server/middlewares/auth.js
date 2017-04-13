import jwt from 'jsonwebtoken';
import config from '../config';
import db from '../models';

export default {
  verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1] || req.headers['x-access-token'];
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized Access' });
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        console.log(token);
        return res.status(401).send({ message: 'Invalid Token' });
      }
      req.decoded = decoded;
      next();
    });
  },

  permitAdmin(req, res, next) {
    db.Role.findById(req.decoded.RoleId)
      .then((role) => {
        if (role.title === 'admin') {
          next();
        } else {
          return res.status(403).send({ message: 'You are not an admin' });
        }
      });
  }
};

