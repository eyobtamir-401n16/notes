'use strict';

// const Validator = require('./validator.js');
const minimist = require('minimist');
const NoteSchema = require('../models/note-schema.js')

class Input{
  constructor (args){
    let formatted = minimist(args)
    console.log(formatted)

  this.command = {};

  let objKey = Object.keys(formatted)

  for (let j= 0; j< objKey.length; j++){
    let key = objKey[j];
    let val = formatted[key]; 

    switch(key){
      case 'a':
      case 'add':
        console.log('key and val', key, val)
        this.command = {action: 'add', payload: val};
        break;
    
      case 'c':
      case 'category':
        this.command.category = val;
        break;

      case 'l':
      case 'list':
        console.log('formatted', formatted)
        console.log('key', key)
        this.command = {action: 'list',  
        payload: typeof formatted[key] === 'string'
        ? formatted[key]
        : false,
      };
        break;
      case 'd':
      case 'delete':
        this.command = {action: 'delete',
         payload: typeof formatted[key] === 'string'
        ? formatted[key]
        : false,
      };
        return;
        default:
          break;
    }
  }
  
  }
//   valid(){
//     if(!this.command)
//       return false;
//   if(!this.command.action)
//       return false;
//   // switch(this.command.action){
//   //   case 'add':
//   //     return typeof this.command.payload === 'string';
//   //   default:
//   //   break;
// // }
// // const schema = {
// //   action: { type: 'string', required: true },
// //   payload: { type: 'string', required: true },
// // }
// const validator = new Validator(NoteSchema);
// return validator.isValid(this.command);
//   }
}
module.exports = Input;