import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class locations extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    street_address: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state_province: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_location_id",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
  }
}
