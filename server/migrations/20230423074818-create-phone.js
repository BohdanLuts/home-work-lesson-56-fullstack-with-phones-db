'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        unique: 'uniqueModelBrand',
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'uniqueModelBrand',
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ram: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      screen_diagonal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      has_nfc: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
