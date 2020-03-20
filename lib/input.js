'use strict';

const minimist = require('minimist');

function Input( args){
  let formatted = minimist(args)

  this.command = {};

  let objKey = Object.keys(formatted)

  for (let j= 0; j< objKey.length; j++){
    let key = objKey[j];
    let val = formatted[key]; 

    switch(key){
      case 'a':
      case 'ad':
      case 'add':
        this.command = {action: 'add', payload: val};
        return;
      default:
        break;
    }
  }


}

Input.prototype.valid = function(){
  if(!this.command)
  return false;
  if(!this.command.action)
  return false;
switch(this.command.action){
  case 'add':
      return typeof this.command.payload === 'string';

  default:
    break;
}
}

module.exports = Input;