import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from './features/userSlice';
import Imessages from './Imessages';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])



  return (
    <div className="app">
      {user ? (
        <Imessages />
      ) : (
          <Login />
        )}

    </div>
  );
}

export default App;
