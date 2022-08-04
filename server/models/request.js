
module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define('request', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '이름'
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '기수'
      }
    }, {
      tableName: 'request',
      comment: '신청 내역'
    });
    
    //Foreign keys
    request.associate = (models) => {
        request.belongsTo(models.application, {foreignKey: 'appId'});
    }

    return request;
  };
  