'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://Eyob1984:Sourcecode1$@cluster0-rk6f8.mongodb.net/app';
const newNotes = require('./models/note-schema.js');

mongoose.connect(dbURL, {
  useNewUrlParser: true, useUnifiedTopology: true
});

let result = new Input(process.argv.slice(2));
let notes = new Notes(result);
console.log(notes)
const dbOpera = async () =>{
  let allNotes = await newNotes.find();
  console.log(allNotes)
  mongoose.disconnect()
}

dbOpera();