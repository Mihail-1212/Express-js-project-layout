/* Create routes instance which contain all site routes */

var express = require('express'),
  initIndexRoutes = require("./index"),
  initUsersRoutes = require("./users");

function Routes(services) {
  this.services = services;
}

Routes.prototype.initRoutes = function() {
  router = express.Router();

  router.use('/', initIndexRoutes(this));
  router.use('/users', initUsersRoutes(this));

  return router;
}

function createNewRoutes(services) {
  return new Routes(services);
}

module.exports = createNewRoutes; 