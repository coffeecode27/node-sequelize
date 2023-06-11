import config from "../../config/config"
const { Sequelize } = require('sequelize');

import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _countries from  "./countries.js";
import _departments from  "./departments.js";
import _employees from  "./employees.js";
import _job_history from  "./job_history.js";
import _jobs from  "./jobs.js";
import _locations from  "./locations.js";
import _regions from  "./regions.js";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const initModels = (sequelize) => {
  const countries = _countries.init(sequelize, DataTypes);
  const departments = _departments.init(sequelize, DataTypes);
  const employees = _employees.init(sequelize, DataTypes);
  const job_history = _job_history.init(sequelize, DataTypes);
  const jobs = _jobs.init(sequelize, DataTypes);
  const locations = _locations.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);

  departments.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(departments, { as: "departments", foreignKey: "manager_id"});
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id"});
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});

  return {
    countries,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    regions,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };