const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the cxplace collection and inserts the cxplaces below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cxdb",
  {
    useMongoClient: true
  }
);

const cxplaceSeed = [
  {
    name: "test",
    address: "test",
    lat: "test",
    lng: "test",
    phone: "test",
    commision: "test",
    buy: "test",
    sell: "test",
    hours: "test",
    image: "test",
    date: new Date(Date.now())
  },
];


db.Cxplace
  .remove({})
  .then(() => db.Cxplace.collection.insertMany(cxplaceSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
