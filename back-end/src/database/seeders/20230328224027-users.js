'use strict';

const role = ['administrator', 'seller', 'costumer'];

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
    {
      name:'Delivery App Admin',
      role: role[0],
      email:'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
     },
     {
      name:'Fulana Pereira',
      role: role[1],
      email:'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
     },
     {
      name:'Cliente Zé Birita',
      role: role[2],
      email:'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
     }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
