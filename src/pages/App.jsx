import '../styles/App.css';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../img/icons8-lápis-96.png'


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
    <div className='appBody'>
      <header>
        <div className='mainName'>
          <h1>Box Notes</h1>
          <img src={Logo} id='logoHeader'/>
        </div>
        <div>
          
        </div>
      </header>
      <p>Olá {auth.currentUser? auth.currentUser.displayName : "Usuário"}</p>
      <Button  onClick={handleSignOut} text={"Sign Out"}/>
    </div>
);
}

export default App;
