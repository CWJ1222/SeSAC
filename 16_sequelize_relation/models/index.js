'use strict';

const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.js')['devel'];
const db = {};

//(1)sequelize 클래스 통해 객체 생성

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//(2)모델을 불러오면서 인자로 정보 전달

const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

//(3) 모델 간 관계 정의
// PlayerModel.hasOne(ProfileModel, {
//   foreignKey: 'player_id',
//   sourceKey: 'player_id',
// });
// ProfileModel.belongsTo(PlayerModel, {
//   foreignKey: 'player_id',
//   targetKey: 'player_id',
// });

// PlayerModel.belongsTo(TeamModel, {
//   foreignKey: 'team_id',
//   targetKey: 'team_id',
// });
// TeamModel.hasMany(PlayerModel, {
//   foreignKey: 'team_id',
//   sourceKey: 'team_id',
// });

// TeamModel.belongsToMany(GameModel, {
//   through: TeamGameModel,
//   foreignKey: 'team_id',
// });
// GameModel.belongsToMany(TeamModel, {
//   through: TeamGameModel,
//   foreignKey: 'game_id',
// });

//(4) db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
