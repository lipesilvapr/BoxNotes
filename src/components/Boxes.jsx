import '../styles/Boxes.css';
import Shape from './Shape';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import app from '../services/firebaseConfig';
import { useAuth } from '../context/AuthContext';
import { LuArrowDownSquare, LuPlusSquare } from "react-icons/lu";

function Boxes({onSelectNote}) {
    const { user } = useAuth(); 
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false);
    const [boxName, setBoxName] = useState('')

    useEffect(() => {
        if (user) {
            const db = getDatabase(app);
            const notesRef = ref(db, `Box/Notes/${user.uid}/Box1/`);
            
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

    const createBox = async () => {
        if(user) {
            const db = getDatabase(app);
            const newDocRef = push(ref(db, `Box/Notes/${user.uid}/${boxName}`))
            await set(newDocRef, {
                titleOfNote: `First note of ${boxName}`,
                contentOfNote: '',
            })
            .then(() => {
                alert("success");
            }).catch((error) => {
                alert("error: ", error.message);
            })
        }
    }

    return(
        <>
            <div className="allBoxes">
                <section>
                    <p className='sectionTitle'>
                        Box: {boxName}
                        <div className='addBox'>
                            <LuPlusSquare size={30} onClick={() => setIsModalOpen(true)}/>
                            <LuArrowDownSquare size={30} onClick={() => setIsListOpen(true)}/>
                        </div>
                    </p>
                </section>
                {isModalOpen && (
                    <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`}>
                        <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                            <h2>Add a New Box</h2>
                            <form onSubmit={createBox}>
                                <input
                                    type="text"
                                    onChange={(e) => setBoxName(e.target.value)}
                                    placeholder="Name of the new box"
                                    required
                                />
                                <div className='modalButtons'>
                                    <button className="button-primary" type="submit">Add Box</button>
                                    <button className="button-secondary" type="button" onClick={() => setIsModalOpen(false)}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isListOpen && (
                    <div className={`modal-overlay ${isListOpen ? 'show' : ''}`}>
                        <div className={`modal ${isListOpen ? 'show' : ''}`}>
                            <h2>Choose a box</h2>
                            <form onSubmit={createBox}>
                            <select>
                                <option value="">Selecione uma opção</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                                <option value="opcao4">Opção 4</option>
                            </select>
                                <div className='modalButtons'>
                                    <button className="button-primary" type="submit">Select Box</button>
                                    <button className="button-secondary" type="button" onClick={() => setIsListOpen(false)}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <div className='notesList'>
                    {notes.map((note) => (
                        <Shape 
                        key={note.id} 
                        title={note.titleOfNote} 
                        content={note.contentOfNote}
                        onClick={() => onSelectNote(note)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Boxes;