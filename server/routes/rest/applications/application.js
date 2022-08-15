const models = require('../../../models');
const sha256 = require('sha256');

async function getApplications(req, res) {
    try {
        const resp = await models.application.findAll({
            attributes: {
                include: [[models.Sequelize.fn("COUNT", models.Sequelize.col("requests.id")), "requestCount"]]
            },
            group: ['application.id'],
            include: [
                {
                    model: models.user,
                    attributes: {
                        exclude: ['password']
                    }
                },
                {
                    model: models.request,
                    attributes: []
                }
            ],
        });

        res.send(resp);
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
async function getApplication(req, res) {
    try {
        //pid: 받아온 id 파라미터
        const pid = req.params.id;

        const resp = await models.application.findOne({
            where: {
                id: pid
            },
            include: [
                {
                    model: models.request
                }
            ]
        });
        res.send(resp);
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
async function upsertApp(req, res) {
    try {
        req.body.userId = req.session.user.id;
        await models.application.upsert(
            req.body
        );
        res.send({ result: true });
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
    getApplications,
    getApplication,
    upsertApp
};