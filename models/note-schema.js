'use strict';
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, require: true},
  note: {type: String, require:true},
  category: {type: Array},
});

const notesModel = mongoose.model('notes', noteSchema);

module.exports = notesModel;