function UsersService(models) {
  this.models = models;
};

UsersService.prototype.getAll = function() {
  return this.models.users.getAll();
}


function createUsersService(models) {
  return new UsersService(models);
}


module.exports = createUsersService;