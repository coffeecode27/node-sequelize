import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_history extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee_id_and_start_date",
        unique: true,
        fields: [
          { name: "employee_id" },
          { name: "start_date" },
        ]
      },
    ]
  });
  }
}
