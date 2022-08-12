module.exports = (sequelize, DataTypes) => {
    const application = sequelize.define('application', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '제목'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '설명'
      },
      maxNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '최대 신청 가능 수'
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: '모임 시작 날짜 및 시간'
      },
      openTime: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: '신청 받는 시간'
      },
      poster: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: '포스터 위치'
      }
    }, {
      tableName: 'application',
      comment: '신청 폼'
    });

    //Foreign keys
    application.associate = (models) => {
        application.hasMany(models.request, {foreignKey: 'appId'});
        application.belongsTo(models.user, {foreignKey: 'userId', comment:'생성한 유저'});
    }

    return application;
  };
  