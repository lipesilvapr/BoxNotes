import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBne0sMCeBwJngaO4Ojk4SwCfripujK5Tk",
  authDomain: "box-notes.firebaseapp.com",
  databaseURL: "https://box-notes-default-rtdb.firebaseio.com",
  projectId: "box-notes",
  storageBucket: "box-notes.appspot.com",
  messagingSenderId: "18642396341",
  appId: "1:18642396341:web:07ad78f627fd29a9100afc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;