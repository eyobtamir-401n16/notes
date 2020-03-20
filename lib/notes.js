'use strict';

class Notes{
  constructor (args){
    if (args.valid()) this.execute(args.command);
    else console.error ("error, Invalid arguments")
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
}
module.exports = Notes;