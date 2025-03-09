import jwt from 'jsonwebtoken';

// authentication function for restricting users from access without token 
export const authenticateToken = (req, res, next) => {

    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            if (error) {
                if (error.name === 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token has expired, please login again' });
                } else {
                    return res.status(403).json({ message: 'Invalid token' })
                }
            }
            req.user = decoded;
            next();
        });

    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token', message: 'Please login' });
    }
};
export default authenticateToken;
