'use strict';
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  note: {type: String, require:true},
  category: {type: Array},
});

const notesModel = mongoose.model('notes', noteSchema);

module.exports = notesModel;