import { useState } from 'react';
import './App.css';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';

function App() {
const [notes, setNotes] = useState([]);

const addNote = (newNote) => {
setNotes(prevNotes => ([...prevNotes, newNote]));
}

const deleteNote = (id) => {
setNotes(prevItem => (prevItem.filter((noteItem, index) => {
  return index !== id
})));
}
  return (
    <div >
     <Header/>
      <CreateArea
      onAdd={addNote}
      />   
       <Footer/>
       {/* <Note key={1} title="Note title" content="Note content"/> */}
       {notes.map((noteItem, index) => (
        <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
       ))}
    </div>
  );
}

export default App;
