'use strict';

const role = ['administrator', 'seller', 'customer'];

module.exports = {
  async up (queryInterface, _Sequelize) {
   await queryInterface.bulkInsert('users', [
    {
      id: 1,
      name:'Delivery App Admin',
      role: role[0],
      email:'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
     },
     {
      id: 2,
      name:'Aline Pereira',
      role: role[1],
      email:'aline@deliveryapp.com',
      password: 'd3aa349c8d932ea71f11aa096ba29f61',
     },
     {
      id: 3,
      name:'Cliente Zé Birita',
      role: role[2],
      email:'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
     },
     {
      id: 4,
      name:'Batatinha',
      role: role[2],
      email:'batatinha@email.com',
      password: 'd3aa349c8d932ea71f11aa096ba29f61',
     },
     {
      id: 5,
      name:'Luigi',
      role: role[1],
      email:'luigi@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
     }
    ], { timestamps: false});
  
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
