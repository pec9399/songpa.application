const models = require('../../../models');
const sha256 = require('sha256');


async function getSession(req, res) {
  if (req.session.user) {
    res.send({
      result: true,
      user: req.session.user
    });
  } else {
    res.status(404).send({
      result: false
    });
  }
}

async function upsertUser(req, res) {
  try {
    const user = await models.user.findOne({
      where: {
        uid: req.body.uid
      }
    });

    if (!user) {
      await models.user.create({
        uid: req.body.uid,
        name: req.body.name,
        password: sha256(req.body.password),
        nickname: req.body.nickname,
        email: req.body.email,
      });
    } else {
      await models.user.update({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
      }, {
        where: {
          uid: req.body.uid
        }
      });

      req.session.user = await models.user.findOne({
        where: {
          uid: req.body.uid
        },
        attributes: ['uid', 'name', 'email', 'nickname']
      });

    }

    res.send({
      result: true
    });

  } catch (err) {
    //bad request
    console.log(err);
    res.status(400).send({
      result: false,
      msg: err.toString()
    });
  }
}


async function login(req, res) {
  try {
    const user = await models.user.findOne({
      where: {
        uid: req.body.uid,
        password: sha256(req.body.password)
      },
      attributes: ['id', 'uid', 'name', 'email', 'nickname']
    });

    if (user) {
      req.session.user = user;
      res.send({
        result: true,
        session: user,
      });
    } else {
      res.send({
        result: false,
        message: '로그인에 실패하였습니다.'
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      result: false,
      msg: err.toString()
    });
  };
}

//Checks if the ID already exists
async function checkID(req, res) {
  try {
    const user = await models.user.findOne({
      where: {
        uid: req.body.uid
      }
    })

    if (user) {
      //found
      res.send({
        result: true
      });
    } else {
      //not found
      res.send({
        result: false
      });
    }
  } catch (err) {
    //bad request
    res.status(400).send({
      result: false,
      msg: err.toString()
    });
  }
}


async function logout(req, res){
    try{
      if(req.session.user){
        req.session.destroy((err)=>{ 
        });
      }
        res.status(200).send({
            result: true
        });
    } catch(err){
        res.status(200).send({
            result: false,
            msg: err.toString()
        });
    }
};


module.exports = {
  getSession,
  upsertUser,
  login,
  checkID,
  logout,
};