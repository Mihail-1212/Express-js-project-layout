/* Create models instance - contain all models */
var createUsersModel = require("./users");

function Models() {

  var dbConnection = require("./dbconnection");

  this.users = createUsersModel(dbConnection);
}

function createModels() {
  return new Models();
}

module.exports = createModels;