import { useEffect, useState } from 'react';
import '../styles/Notes.css';
import Button from './Button';
import { getDatabase, ref, set, push, update } from 'firebase/database';
import app from '../services/firebaseConfig';
import { useAuth } from '../context/AuthContext';

function Notes({note, noteId}) {
    const[noteTitle, setNoteTitle] = useState(note ? note.titleOfNote : '');
    const[noteContent, setNoteContent] = useState(note ? note.contentOfNote : '');
    const {user} = useAuth();

    const saveNote = async () => {
        if(!noteId) {
            const db = getDatabase(app);
            const newDocRef = push(ref(db, `Box/Notes/${user.uid}`));
            await set(newDocRef, {
                titleOfNote: noteTitle,
                contentOfNote: noteContent,
            }).then(() => {
                alert("data saved successfully");
            }).catch((error) => {
                alert("error: ", error.message);
            })
        } else {
            const db = getDatabase(app);
            const noteRef = ref(db, `Box/Notes/${user.uid}/${noteId}`);
            await update(noteRef, {
                titleOfNote: noteTitle,
                contentOfNote: noteContent,
            }).then(() => {
                alert("Note updated successfully");
            }).catch((error) => {
                alert("Error: ", error.message);
            });
        }
    }

    useEffect(() => {
        if (note) {
            setNoteTitle(note.titleOfNote);
            setNoteContent(note.contentOfNote);
        }
    }, [note]);

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