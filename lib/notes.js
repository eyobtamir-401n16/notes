'use strict';
const Validator = require('./validator.js');

class Notes{
  constructor (args){
    if (args.valid()) this.execute(args.command);
    else throw new Error("this an  error")
  }
  
  execute(command){
    switch(command.action){
      case 'add':
      this.add(command.payload);
        break;
      default:
        break;
    }
  console.log('correct')
  }
  add(payload){
    let id = Math.floor(Math.random()*1000);
    console.log('Adding Note');
    console.log(id + ':' + payload) 
  }
   valid() {
    const schema = {
      id: { type: 'string', required: true },
      text: { type: 'string', required: true },
    }
    const validator = new Validator(schema);
    return validator.isValid(this);
  }
}
module.exports = Notes;