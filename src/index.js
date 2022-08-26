import app from "./app.js";

// This import is coming from database so that we can set up the logic in index to connect to our database
import { sequelize } from "./database/database.js";

// When we dont have any tables in the database we will use the sync method to create the tables, by using the 
// structure that we set up in our schemas, after creating the first one of each we can comment it out
// import './models/Project.js';
// import './models/Task.js';

async function main() {
  // Before the application starts we will use the sequelize method sync to sync the database with the models
  
    // We will set up our force to false so that it doesnt update everytime we save or refresh the server
    await sequelize.sync({force: false});
    app.listen(4000);
    console.log("Server on port 4000");
  
}
main();


// This is to check if the database is connected or not
// async function check() {
//   try {
//     await sequelize.authenticate();
//     console.log('Successfully connected to the database');
//     app.listen(4000);
//     console.log("Server on port 4000");
//   } catch (error) {
//     console.log('Unable to connect to the database' ,error)
//   }
// }

// check()

