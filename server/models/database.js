var pg = require("pg");

var connectionString = process.env.DATABASE_URL || "postgres://puiawqoe:sh7KrZd47VEgOG9zq7BIWffPKRybOU_e@baasu.db.elephantsql.com:5432/puiawqoe";

var client = new pg.Client(connectionString);

var db = () => {
  client.connect((err) => {
    if (err) {
      console.error('connection error', err);
    } else {
      console.log('Connected to the database');
    }
  });
  return client;
};

module.exports = { db, client };