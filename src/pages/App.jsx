import '../styles/App.css';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../img/icons8-lápis-96.png';
import Boxes from '../components/Boxes';
import Notes from '../components/Notes';


function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedBoxId, setSelectedBoxId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Limpa a assinatura quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  async function handleSignOut() {
    try{
      await signOut(auth);
      navigate("/");

    } catch (e) {
      console.error("Erro ao deslogar: ", e);
    }
  }

  return (
    <div className='appBody'>
      <header>
        <div className='mainName'>
          <h1>BoxNotes</h1>
          <img src={Logo} id='logoHeader'/>
        </div>
        <div className='user'>
          <p>Olá {user ? user.displayName || "Usuário" : "Carregando..."}</p>
          <Button  onClick={handleSignOut} text={"Sign Out"}/>
        </div>
      </header>
      <div className='mainContent'>
        <Boxes onSelectNote={(note) => {
          setSelectedNote(note);
          setSelectedNoteId(note.id);
        }}/>
        <Notes note={selectedNote} noteId={selectedNoteId}/>
      </div>
    </div>
);
}

export default App;
