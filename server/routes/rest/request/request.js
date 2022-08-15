const models = require('../../../models');
const sha256 = require('sha256');
const { Op } = require('sequelize');

async function reqApp(req, res) {
    try {
        const time = new Date();
        const timeValid = await models.application.findOne({
            where: {
                id: req.params.appId,
                openTime: { [Op.lte]: time }
            }
        });
        // openTime 시간 전에 요청했을 경우 false 리턴
        if (!timeValid) {
            res.send({ result: false })
        }

        const addUser = await models.request.upsert(
            {
                name: req.body.name,
                year: req.body.year,
                appId: req.params.appId
            }
        )
        res.send(addUser);
    }
    catch (err) {
        //bad request
        console.log(err);
        res.status(400).send({
            result: false,
            msg: err.toString()
        });
    }
};

async function reqDelete(req, res) {
    try {
        const deleteId = await models.request.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({ result: true })
    }
    catch (err) {
        //bad request
        console.log(err);
        res.status(400).send({
            result: false,
            msg: err.toString()
        });
    }
}

module.exports = {
    reqApp,
    reqDelete
};

