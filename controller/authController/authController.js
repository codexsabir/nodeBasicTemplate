


const protectTo = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({
                status: 'fail',
                message: 'You are not allowed to access this route'
            });
        }
        next();
    }
}

module.exports = {protectTo};