const express = require('express');


const create = (req, res) => {
    console.log("Controller", req.body);
    return res.json({
        successful: true,
        data: req.body
    });
}

const get = (req, res) => {
    return res.json({
        successful: true,
        data: [{id: 1, name: 'Hi'}, {id: 2, name: 'Hey'}, {id: 3, name: 'Hello'}]
    });
}

module.exports = {
    create,
    get
};