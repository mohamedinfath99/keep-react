import React, {useState} from "react";
import './CreateNote.css'

import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



function CreateNode(props) {

    const [visibibe, setVisibile ] = useState(false);



    // Visibile action
    const expand = () => {
        setVisibile(true);
    };



    // Store data
    const[note, setNote] = useState({
        title:"",
        content:""
    })



    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote((preNote) => {
            return{
                ...preNote,
                [name] : value
            }
        })
        
    };


    const submitNote = (event) => {
        event.preventDefault();
        props.addNote(note);
        setNote({
            title : "",
            content: ""
        })
        setVisibile(false);
    }



    return(
        <div>
            <form className="create-note">
                { visibibe && 
                <input name="title" placeholder="Titile" type="text" onChange={handleChange} value={note.title} /> }
                <textarea name="content" placeholder="Take a note..." onClick={expand} onChange={handleChange} rows= {visibibe ? 3 : 1} value={note.content}/>
                <Zoom in={visibibe}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateNode;
