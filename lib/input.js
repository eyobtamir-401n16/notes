'use strict';

const minimist = require('minimist');

function Input( args){
  let formatted = minimist(args)
  console.log(formatted)
this.command = {};

}

Input.prototype.valid = function(){

}

module.exports = Input;