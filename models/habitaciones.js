'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  habitaciones.init({
    idhabitaciones: DataTypes.INTEGER,
    precio_por_noche: DataTypes.FLOAT,
    piso: DataTypes.INTEGER,
    max_personas: DataTypes.TINYINT,
    tiene_cama_base: DataTypes.TINYINT,
    tiene_ducha: DataTypes.TINYINT,
    tiene_baño: DataTypes.TINYINT,
    tiene_balcon: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'habitaciones',
  });
  return habitaciones;
};