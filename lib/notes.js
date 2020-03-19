'use strict';

function Notes(args) {

  if(args.valid()) this.execute(args.command);
  else console.log(" Invalide agrguments ")
}

Notes.prototype.execute = function (command) {
  switch(command.action){
    case 'add':
    this.add();
      break;
    default:
      break;
  }
console.log('correct')
}
Notes.prototype.add = function () {
let id = Math.floor(Math.random()*1000);
console.log('Adding Note');
console.log(`${id}:${payload}`)
}

module.exports = Notes;