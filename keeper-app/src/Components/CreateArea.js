import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateArea() {
  return (
    <div>
      <form className='create-area'>
        <input type="text" placeholder='title' />
        <textarea placeholder='take a note' rows="3" ></textarea>
        <button> <AddIcon/> </button>
      </form>
    </div>
  )
}

export default CreateArea;
