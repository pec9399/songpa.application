const models = require('../../../models');
const sha256 = require('sha256');

async function getApplications(req, res) {
    const resp = await models.application.findAll({
        include: [
            {
                model: models.user,
                attributes: {
                    exclude: ['password']
                }
            }
        ]
    });
    res.send(resp);
    // res.send({ result: true });

}



module.exports = {
    getApplications
};