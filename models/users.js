var TableNames = require("./modelsConfig"),
  TableNames = TableNames.users;

function UsersModel(connection) {
  this.connection = connection;
}

UsersModel.prototype.getAll = function() {
  return this.connection.any("SELECT * FROM "+ TableNames);
}

function createUsersModel(connection) {
  return new UsersModel(connection);
}

module.exports = createUsersModel;