import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};



// {
//   "title": "Task Title",
//   "description": "Task description",
//   "priority": "high",
//   "status": "pending",
//   "assignedTo": "66c93902dc01d4d1c9e4ef94"  
// }
