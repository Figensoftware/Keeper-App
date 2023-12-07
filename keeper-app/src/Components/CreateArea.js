import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
const [note, setNote] = useState({
    title:"",
    content:""
});
const [isExpended, setIsExpended] = useState(false);

const handleChange = (event) => {
const {name, value} = event.target;
setNote(prevNote => ({...prevNote, [name]: value}));
}

    const submitNote = (event) => {
    props.onAdd(note);
    setNote({
        title:"",
        content:""
    });
    event.preventDefault();
    }

const Expend = () => {
    setIsExpended(true);
}

  return (
    <div>
      <form className='create-area'>
       {isExpended && ( <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder='Title' 
          />)}
        <textarea
         onClick={Expend}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder='Take a note...'
           rows={isExpended ? "3" : "1"}
            />

            <Zoom in={isExpended}>
            <Fab  onClick={submitNote}> 
            <AddIcon/> 
            </Fab>
            </Zoom>
        </form>
    </div>
  )
}

export default CreateArea;
