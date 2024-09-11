import '../styles/Boxes.css';
import Shape from './Shape';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../services/firebaseConfig';
import { useAuth } from '../context/AuthContext';

function Boxes() {
    const { user } = useAuth(); 
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (user) {
            const db = getDatabase(app);
            const notesRef = ref(db, `Box/Notes/${user.uid}`);
            
            const unsubscribe = onValue(notesRef, (snapshot) => {
                const data = snapshot.val();
                const notesArray = [];
                
                for (let id in data) {
                    notesArray.push({ id, ...data[id] });
                }
                
                setNotes(notesArray);
            });

            return () => unsubscribe(); 
        }
    }, [user]);
    return(
        <>
            <div className="allBoxes">
                <p className='sectionTitle'>Boxes</p>
                {notes.map((note) => (
                    <Shape title={note.titleOfNote} content={note.contentOfNote}/>
                ))}
            </div>
        </>
    );
}

export default Boxes;