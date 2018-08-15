// var obj ={
//   name: 'Jasneet',
//   surname: 'Bhatia'
// }
//
// var stringObj = JSON.stringify(obj);
//
// console.log(stringObj);

const fs = require('fs');

var originalNote = {
  title:'Jasneet',
  body: 'bhatia'
}

var jsonString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', jsonString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(note.title);
