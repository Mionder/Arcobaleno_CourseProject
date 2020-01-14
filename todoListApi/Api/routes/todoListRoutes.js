'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_a_user);

  app.route('/users/:userId')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);

  app.route('/drinks')
    .get(todoList.list_all_drinks)
    .post(todoList.create_a_drink);

  app.route('/drinks/:drinkId')
    .get(todoList.read_a_drink)
    .put(todoList.update_a_drink)
    .delete(todoList.delete_a_drink);

    app.route('/coupons')
    .get(todoList.list_all_coupons)
    .post(todoList.create_a_coupon);

  app.route('/coupons/:couponId')
    .get(todoList.read_a_coupon)
    .put(todoList.update_a_coupon)
    .delete(todoList.delete_a_coupon);
};