import { useState } from 'react';
import '../styles/Notes.css';
import Button from './Button';
import { getDatabase, ref, set, push } from 'firebase/database';
import app from '../services/firebaseConfig';

function Notes() {
    const[noteTitle, setNoteTitle] = useState('');
    const[noteContent, setNoteContent] = useState('');

    const saveNote = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "Box/Notes"));
        set(newDocRef, {
            titleOfNote: noteTitle,
            contentOfNote: noteContent,
        }).then(() => {
            alert("data saved successfully");
        }).catch((error) => {
            alert("error: ", error.message);
        })
    }

    return(
        <>
            <div className="noteSpace">
                <input className='noteTitle' placeholder='Write your note title here...' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
                <textarea className='note' value={noteContent} onChange={(e) => setNoteContent(e.target.value)}/>
                <div className='buttons'>
                    <Button text={'Save'} onClick={saveNote}/>
                </div>
            </div>
        </>
    );
}

export default Notes;