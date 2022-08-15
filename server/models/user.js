
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    uid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
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
    comment: '유저'
  });

  //Foreign keys
  user.associate = (models) => {
    user.hasMany(models.application, { foreignKey: 'userId' });
  }

  return user;
};
