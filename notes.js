console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () =>{
  try{
    var notesString = fs.readFileSync('notes-data.json');
  return JSON.parse(notesString);}
  catch(e){
    return[];
  }
}

var saveNotes =(notes) =>{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) =>{
  var notes = fetchNotes();
  var note={
    title,
    body
  };
var duplicateNodes = notes.filter((note) => note.title === title);
  if(duplicateNodes.length==0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    saveNotes(notes);
    return note;
  }
  };

var getAll = () =>{
  return fetchNotes();
  };

var readNote = (title) =>{
    var notes = fetchNotes();
    var currentNode = notes.filter((note)=> note.title===title);

    return currentNode[0];

    };
var deleteNode = (title) =>{
  var notes= fetchNotes();
  var newNotes= notes.filter((note)=> note.title!==title);
  saveNotes(newNotes);

  return notes.length != newNotes.length;
      };

var logNote= (note) =>{
  console.log('--');
  console.log(`title :${note.title}`);
  console.log(`body :${note.body}`);
}

module.exports={
  addNote,
  getAll,
  readNote,
  deleteNode,
  logNote
}
