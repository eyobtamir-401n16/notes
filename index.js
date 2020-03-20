'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let result = new Input(process.argv.slice(2));
let notes = new Notes(result);