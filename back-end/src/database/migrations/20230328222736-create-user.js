"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        timeStamps: false,
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
