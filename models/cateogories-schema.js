'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name:{type: String, require: true}
});

const categoriesModel = mongoose.model('catagories', categoriesSchema);

module.exports = categoriesModel;