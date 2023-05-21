('use strict');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING(64),
        unique: 'uniqueModelBrand',
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9\s]*$/,
          len: [2, 64],
        },
      },
      brand: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: 'uniqueModelBrand',
        validate: {
          is: /^[a-zA-Z0-9\s]*$/,
          len: [2, 16],
        },
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          is: /^[0-9]{4}$/,
        },
      },

      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },

      processor: {
        type: DataTypes.STRING(24),
        allowNull: false,
      },

      screenDiagonal: {
        type: DataTypes.FLOAT(2),
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },

      hasNfc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
