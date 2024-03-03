const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  console.log("Trying connect to Database...");

  mongoClient
    .connect(
      "mongodb+srv://movchaneric:YBTvrVp8vgu95WvM@tododb.oiusd5y.mongodb.net/World-Oasis?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("database.js: Succesfuly connected to db");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log("mongodb.js error: ", err);
      throw err;
    });
};

const getDb = () => {
  //check if db is running
  if (_db) {
    return _db;
  }
  throw "No database has been found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
