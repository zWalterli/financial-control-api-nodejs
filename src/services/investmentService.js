const investment = require('../repository/investmentRepository');
const axios = require('axios');

const create = async (req) => {
    return await investment.create(req);
}

const update = async (req) => {
    return await investment.update(req);
}

const remove = async (id) => {
    return await investment.remove(id);
}

const get = async (req) => {
    const filter = req && req.id ? {id: req.id} : {};
    return await investment.get(filter);
}

const setGainPerTicket = async (req) => {
    const myTickets = await get({});
    const ticketsSymbol = myTickets.map(ticket => ticket.symbol).join(',');

    axios.get(`https://brapi.dev/api/quote/${ticketsSymbol}?range=1d&interval=1d&fundamental=true&dividends=true`)
        .then(res => {
            const data = res.data.results;
            data.forEach(ticket => {
                console.log(ticket);
            }).catch(err => {
                console.error('Error: ', err);
            });
        }
    );
}

module.exports = {
    get,
    create,
    update,
    remove,
    setGainPerTicket
};