// This brings the datatypes that sequelize supports
import { DataTypes } from "sequelize";

// We import sequelize to be able to create our tables
import { sequelize } from "../database/database.js";
// We import our task model to then use it in our hasMany relationship
import { Task } from "./Task.js";

// This receives two parameters: the name of the table and the second is an object where we define the structure of the table
export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      // the id should not repeat in the database so we set it as primary key and we set it to true  
      primaryKey: true,
      // this means that it will auto increment the id
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  // If this changes to false for example the database can be updated with force: true in our index.js
  {
    timestamps: false,
  }
);

// This is to create the relation between the tables
// The hasMany method which means that this table has many of our other table, in this case each Project has many tasks
// Each of our tasks has a foreign key that points to the id of the project, in this case 
Project.hasMany(Task, {
  foreignkey: "projectId",
  sourceKey: "id",
});
// We also assign a method to the Task model to be able to get the project of the task
Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });
