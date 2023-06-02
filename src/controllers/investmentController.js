const investmentService = require('../services/investmentService');

module.exports = {
    async get (req, res) {
        try {
            const data = await investmentService.get(req);
            res.send({
                success: true,
                data: data
            });
        } catch(err) {
            console.error("Erro: ", err);
            res.status(400).send(
            {
                success: false,
                error: err.message
            }
            );
        }
    },

    async create (req, res) {
        try {
            const data = await investmentService.create(req);
            res.send({
                success: true,
                data: data
            });
        } catch(err) {
            console.error("Erro: ", err);
            res.status(400).send(
            {
                success: false,
                error: err.message
            }
            );
        }
    },

    async update (req, res) {
        try {
            const data = await investmentService.update(req);
            res.send({
                success: true,
                data: data
            });    
        } catch(err) {
            console.error("Erro: ", err);
            res.status(400).send(
            {
                success: false,
                error: err.message
            }
            );
        }
    },

    async remove (req, res, next) {
        try {
            const data = await investmentService.update(req.id);
            res.send({
                success: true,
                data: data
            });    
        } catch(err) {
            console.error("Erro: ", err);
            res.status(400).send(
            {
                success: false,
                error: err.message
            }
            );
        }
    },

    async setGainPerTicket (req, res) {
        try {
            const data = await investmentService.setGainPerTicket(req);
            res.send({
                success: true,
                data: data
            });   
        } catch(err) {
            console.error("Erro: ", err);
            res.status(400).send(
            {
                success: false,
                error: err.message
            }
            );
        }
    }
};