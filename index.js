'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://Eyob1984:Sourcecode1$@cluster0-rk6f8.mongodb.net/app';
const Mynotes = require('./models/note-schema.js');
const minimist = require('minimist');

mongoose.connect(dbURL, {
  useNewUrlParser: true, useUnifiedTopology: true
});
let args = process.argv.slice(2);
let result = new Input(process.argv.slice(2));
let notes = new Notes(result);
console.log(notes)
const dbOpera = async () =>{
  let allNotes = await Mynotes.find();
  allNotes.forEach(value =>{
    console.log(value.notes)
  })
  if(args.length > 0){
    let newNote = new Mynotes({
      note:args[0],
    });
    try{
    let res = await newNote.save();
    console.log(res);
    } catch(error){
      console.error(error);
    }
  }

  mongoose.disconnect()
}

dbOpera();