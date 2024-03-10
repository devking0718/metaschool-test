const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: 'Failed', data: "none" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

function verifyAdminToken(req, res, next) {
  verifyToken(req, res, () => {
    const token = req.headers.authorization;
    const decoded = jwt.decode(token);
    if (decoded.role !== 'admin') {
      return res.status(401).json({ message: "You don't have admin permission." });
    }
    next();
  });
}

module.exports = { verifyToken, verifyAdminToken };