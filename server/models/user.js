module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      uid: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '이름'
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '별명'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'sha256 hash 사용'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'user',
      comment: '유저',
      //아래는 foreign key연결 위한 것
      /*classMethods: {
        associate(models) {
          user.belongsToMany(models.time, {foreignKey: 'uid'});
        }
      }*/
    });
    return user;
  };
  