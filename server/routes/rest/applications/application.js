const models = require('../../../models');
const sha256 = require('sha256');
const { map } = require('../../../app');

async function getApplications(req, res) {
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



module.exports = {
    getApplications
};