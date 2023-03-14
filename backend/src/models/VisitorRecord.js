'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
    }
  }
  project.init({
    projectName: DataTypes.TEXT,
    skills: DataTypes.TEXT,
    awards: DataTypes.TEXT,
    devLead: DataTypes.TEXT,
    architect: DataTypes.TEXT,
    projectManager: DataTypes.TEXT,
    projectTeam: DataTypes.TEXT,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};
