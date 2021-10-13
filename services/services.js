/* Create service instance - contain all services */
var createUsersService = require("./users");

function Services(models) {
  this.models = models;

  this.users = createUsersService(models);
}

function createServices(models) {
  return new Services(models);
}

module.exports = createServices;