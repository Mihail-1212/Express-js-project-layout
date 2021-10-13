var express = require('express'),
  urlHelper = require("../helpers/urlHelper");

/* Init routes function */
function initIndexRoutes(routes) {
  var router = express.Router();
  var services = routes.services;

  router.get('/', getIndexPage(services));

  return router;
}


/* GET home page */
function getIndexPage(services) {
  return function(req, res, next) {
    res.render('index', { 
      title: 'Express',
      baseURL: urlHelper.getBaseURL(req)
    });
  };
}


module.exports = initIndexRoutes;