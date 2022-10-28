import React, { useState } from "react";

// import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
// npm install @mui/material @emotion/react @emotion/styled
// import Fab from '@mui/material/Fab';

// import Zoom from '@mui/material/Zoom';
// // or
// import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });



  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
      {/* {isexpanded  ?          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null } */}

       <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
