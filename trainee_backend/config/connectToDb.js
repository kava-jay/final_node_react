const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    // await mongoose.connect("mongodb://mongo-db/mernAppDb");
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
}


// var mongoClient = require("mongodb").MongoClient;

// async function connectToDb(){
//   try{
//     mongoClient.connect("mongodb://mongodbconnection:W2cnqZmTDV25eXLhPCtF6tXQgBoizmoAQlwFe9Zqu8R5iSDQY5q5baj39YGxR7uEy3xGcaagXchgACDbTnCipQ==@mongodbconnection.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbconnection@", function (err, NoteApp) {
//     });
//     console.log("Connect to DB");
//   }catch(err){
//     console.log(err);
//   }
// }

module.exports = connectToDb;
