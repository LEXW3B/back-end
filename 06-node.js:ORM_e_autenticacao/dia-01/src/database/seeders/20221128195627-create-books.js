'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        pageQuantity: 200,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'O Poderoso Chefão',
        author: 'Mario Puzzo',
        pageQuantity: 400,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Trybe History',
        author: 'Goyas',
        pageQuantity: 500,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Caca History',
        author: 'Caca Jr',
        pageQuantity: 1000,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
