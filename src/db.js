let MongoClient = require('mongodb').MongoClient;

let connection_string = process.env.CONNECTION_STRING;

let client = new MongoClient(connection_string, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

let db = null


export default () => {
 return new Promise((resolve, reject) => {

    
 if (db && client.isConnected) {
 resolve(db)
 }
 else {
 client.connect(err => {
 if (err) {
 reject("Spajanje na bazu nije uspjelo:" + err);
 }
 else {
 console.log("Database connected successfully!");
 db = client.db("vjezbe");
 resolve(db);
 }
 });
 }
 });
}