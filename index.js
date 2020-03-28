'use strict';

const minimist = require('minimist');
const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const Mynotes = require('./models/note-schema.js');

const Mycateogories = require('./models/cateogories-schema.js')

const dbURL = 'mongodb+srv://Eyob1984:Sourcecode1$@cluster0-rk6f8.mongodb.net/app';


mongoose.connect(dbURL, {
  useNewUrlParser: true, useUnifiedTopology: true
});
let args = process.argv.slice(2);
let result = new Input(process.argv.slice(2));
// console.log(result)
let notes = new Notes(result);
// console.log(notes)
const dbOpera = async () =>{
  let allNotes = await Mynotes.find();
  let allCategories = await Mycateogories.find();
  allNotes.forEach(value =>{
    // console.log(value.note)
  })

  // if(args.length > 0){
  //   let newNote = new Mynotes({
  //     note:args[0],
  //   });
  //   try{
  //   let res = await newNote.save();
  //   // console.log(res);
  //   } catch(error){
  //     console.error(error);
  //   }
  // }
  let allCats = await Mycateogories.findOne({name:'xyz'});

  

// console.log(allCats)

  allCategories.forEach(value =>{
    // console.log(value.name);
  })

  
}

dbOpera();