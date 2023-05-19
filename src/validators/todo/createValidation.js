
const createValidator = (req, res, next) => {
    if (!req.body.name) {
        return res.json({
            successful: false,
            error: 'Name is required'
        })
    }
    
    next();
}

module.exports = {
    createValidator
}