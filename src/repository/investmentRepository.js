const paper = require('../models/paper');

const create = async (model) => {
    const response = await paper.create(model);
    return response;
}

const update = async (model) => {
    const response = await paper.findByIdAndUpdate({_id: model.id}, model);
    return response;
}

const remove = async (id) => {
    return await paper.findOneAndDelete(id);
}

const get = async (filter) => {
    return await paper.find(filter);
}

module.exports = {
    get,
    create,
    update,
    remove
};