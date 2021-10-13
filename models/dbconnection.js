var pgp = require("pg-promise")(/*options*/);

var dbConfig = require("../config/connection");

// Initial database variables
const username = dbConfig.username,
  password = dbConfig.password,
  host = dbConfig.host,
  port = dbConfig.port,
  database = dbConfig.databaseName;

// DB open connection
var db = pgp(`postgres://${username}:${password}@${host}:${port}/${database}`);

// Export db object
module.exports = db;