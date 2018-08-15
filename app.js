//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')
const titleOptions ={
  describe:'title of note',
  demand: true,
  alias: 't'};
const bodyOptions={
  describe:'body of note',
  demand:true,
  alias:'b'};
const argv = yargs
.command('add','add a new note',{
  title:titleOptions,

  body:bodyOptions
  })
.command('list', 'list all nodes')
.command('read','read a note',{
  title:titleOptions})
.command('remove','remove a node',{
  title:titleOptions})
  .help()
.argv;

var command = argv._[0];

//console.log('process',process.argv);
//console.log('yarg', argv);
//console.log('Command', command);
if(command === 'add'){
var note=  notes.addNote(argv.title, argv.body);
if(note){
  console.log('Note created');
  notes.logNote(note);

}
else {
  console.log('note title taken');
}
}
else if(command === 'list'){
  var allNotes= notes.getAll();
  console.log(`printing ${allNotes.length} notes`);
  allNotes.forEach((note)=> notes.logNote(note));
}
else if(command === 'read'){
var note=  notes.readNote(argv.title)
if(note){
  console.log('note found');
  notes.logNote(note);
  }
  else {
    console.log('note not present');
  }
}
else if(command === 'remove'){
var noteRemoved =  notes.deleteNode(argv.title);
var message= noteRemoved ? 'note was removed' : 'note does not exist';
console.log(message);
}
else{
  console.log('command not found');
}
