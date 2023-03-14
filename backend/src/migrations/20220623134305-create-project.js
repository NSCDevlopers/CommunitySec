'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.TEXT
      },
      skills: {
        type: Sequelize.TEXT
      },
      awards: {
        type: Sequelize.TEXT
      },
      devLead: {
        type: Sequelize.TEXT
      },
      architect: {
        type: Sequelize.TEXT
      },
      projectManager: {
        type: Sequelize.TEXT
      },
      projectTeam: {
        type: Sequelize.TEXT
      },
      startDate: {
        type: Sequelize.DATEONLY
      },
      endDate: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};