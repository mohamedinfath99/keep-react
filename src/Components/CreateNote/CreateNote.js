import React, { useState, useEffect } from 'react';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './CreateNote.css';

function CreateNote(props) {

    const [visible, setVisible] = useState(false);
    const [error, setError] = useState('');

    const expand = () => {
        setVisible(true);
    };

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: value
        }));
    };

    const submitNote = (event) => {
        event.preventDefault();
        if (!note.title.trim() || !note.content.trim()) {
            setError('Please enter a title and content');
            return;
        }
        props.addNote({
            id: Date.now(),
            title: note.title,
            content: note.content
        });
        setNote({
            title: '',
            content: ''
        });
        setVisible(false);
        setError('');
    };

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError('');
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    return (
        <div>
            <form className="create-note">
                {visible && (
                    <input
                        name="title"
                        placeholder="Title"
                        type="text"
                        onChange={handleChange}
                        value={note.title}
                    />
                )}

                <textarea
                    name="content"
                    placeholder="Take a Note ✒️"
                    onClick={expand}
                    onChange={handleChange}
                    rows={visible ? 3 : 1}
                    value={note.content}
                />

                <Zoom in={visible}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default CreateNote;