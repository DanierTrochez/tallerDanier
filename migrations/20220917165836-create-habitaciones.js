'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idhabitaciones: {
        type: Sequelize.INTEGER
      },
      precio_por_noche: {
        type: Sequelize.FLOAT
      },
      piso: {
        type: Sequelize.INTEGER
      },
      max_personas: {
        type: Sequelize.TINYINT
      },
      tiene_cama_base: {
        type: Sequelize.TINYINT
      },
      tiene_ducha: {
        type: Sequelize.TINYINT
      },
      tiene_baño: {
        type: Sequelize.TINYINT
      },
      tiene_balcon: {
        type: Sequelize.TINYINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitaciones');
  }
};