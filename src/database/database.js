// To import the whole library we have to type Sequelize with the capital S, because otherwirse it will be imported as an instance
import Sequelize from "sequelize";

// Sequelize requires a connection to the database in order to create the models (our tables)
// This object ('sequelize') is what will let us create tables and design the relations in our database.
export const sequelize = new Sequelize(
  "testproject", // db name,
  "postgres", // username
  "T890pT8wKTTi", // password
  {
    host: "localhost",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
