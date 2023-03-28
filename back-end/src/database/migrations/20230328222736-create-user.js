'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    timeStamps: false,
  }
  );
},

down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('users');
}
};
