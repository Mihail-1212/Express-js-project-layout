var express = require('express'),
  createError = require('http-errors'),
  urlHelper = require("../helpers/urlHelper");

/* Init routes function */
function initUsersRoutes(routes) {
  var router = express.Router();
  var services = routes.services;

  router.get('/', getUsersListPage(services));

  return router;
}


/* GET users page */
function getUsersListPage(services) {
  return function(req, res, next) {
    services.users.getAll().then(users => {
      res.render('users', { 
        title: 'Express',
        baseURL: urlHelper.getBaseURL(req),
        users: users
      });
    }).catch(err => {
      createError(500); // Create internal server error
    });
  };
}


module.exports = initUsersRoutes;