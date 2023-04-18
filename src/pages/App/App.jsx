import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import ChatPage from '../ChatPage/ChatPage';
import TripPage from '../TripPage/TripPage';
import MyCheckList from '../MyCheckList/MyCheckList';

export default function App() {
  
  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }
  console.log(user)
  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/chat" element={<ChatPage user={user}/>} />
            <Route path="/trips" element={<TripPage/>}/>
            <Route path="/checklist" element={<MyCheckList/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

