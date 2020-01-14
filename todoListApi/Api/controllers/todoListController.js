'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('Users'),
Drink = mongoose.model('Drinks'),
Task = mongoose.model('Tasks'),
Coupon = mongoose.model('Coupons');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  }); 
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
 

exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

/* Users Settings */

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
 

exports.delete_a_user = function(req, res) {


  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};





exports.list_all_drinks = function(req, res) {
  Drink.find({}, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};

exports.create_a_drink = function(req, res) {
  var new_drink = new Drink(req.body);
  new_drink.save(function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};


exports.read_a_drink = function(req, res) {
  Drink.findById(req.params.DrinkId, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};


exports.update_a_drink = function(req, res) {
  Drink.findOneAndUpdate({_id: req.params.drinkId}, req.body, {new: true}, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};
 

exports.delete_a_drink = function(req, res) {


  Drink.remove({
    _id: req.params.drinkId
  }, function(err, drink) {
    if (err)
      res.send(err);
    res.json({ message: 'Drink successfully deleted' });
  });
};


/* COUPONS Settings */

exports.list_all_coupons = function(req, res) {
  Coupon.find({}, function(err, coupon) {
    if (err)
      res.send(err);
    res.json(coupon);
  });
};




exports.create_a_coupon = function(req, res) {
  var new_coupon = new Coupon(req.body);
  new_coupon.save(function(err, coupon) {
    if (err)
      res.send(err);
    res.json(coupon);
  });
};


exports.read_a_coupon = function(req, res) {
  Coupon.findById(req.params.couponId, function(err, coupon) {
    if (err)
      res.send(err);
    res.json(coupon);
  });
};


exports.update_a_coupon = function(req, res) {
  Coupon.findOneAndUpdate({_id: req.params.couponId}, req.body, {new: true}, function(err, coupon) {
    if (err)
      res.send(err);
    res.json(coupon);
  });
};
 

exports.delete_a_coupon = function(req, res) {


  Coupon.remove({
    _id: req.params.couponId
  }, function(err, coupon) {
    if (err)
      res.send(err);
    res.json({ message: 'Coupon successfully deleted' });
  });
};