'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      unique: true
    }
})

var DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  }
})

var CouponSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  }
})

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: Number,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
}); 
module.exports = mongoose.model('Users', UserSchema);
module.exports = mongoose.model('Drinks', DrinkSchema);
module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Coupons',CouponSchema);
