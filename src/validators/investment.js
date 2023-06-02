
const create = (req, res, next) => {
    if (!req.body) {
        return res.send({
            successful: false,
            error: 'Data invalid'
        })
    }
    
    next();
}

const update = (req, res, next) => {
    if (!req.body || !req.body.id) {
        res.send({
            success: true,
            error: 'Id not specified'
        });
    }
    
    next();
}

const remove = (req, res, next) => {
    
    if (!req.params || !req.params.id) {
        res.send({
            success: true,
            error: 'Id not specified'
        });
    }
    
    next();
}

module.exports = {
    create,
    update,
    remove
}