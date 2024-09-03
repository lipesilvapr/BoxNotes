import '../styles/App.css';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const navigate = useNavigate();

  async function handleSignOut() {
    try{
      console.log(auth.currentUser.uid);
      await signOut(auth);
      navigate("/");

    } catch (e) {
      console.error("Erro ao deslogar: ", e);
    }
  }

  return (
    <div className='all'>
      <div>
        <h1>Box Notes</h1>
        <p>Olá {auth.currentUser? auth.currentUser.displayName : "Usuário"}</p>
        <Button onClick={handleSignOut} text={"Sign Out"}/>
      </div>
    </div>
  );
}

export default App;
