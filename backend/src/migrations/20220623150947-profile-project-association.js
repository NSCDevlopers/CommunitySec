'use strict';

module.exports = {
  async up (queryInterface, Sequelize,) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.sequelize.query("ALTER TABLE projects ADD profileId INTEGER NOT NULL, FOREIGN KEY(profileId) REFERENCES profiles(id);")
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.sequelize.query("ALTER TABLE projects DROP INDEX profileId;")
  }
};
