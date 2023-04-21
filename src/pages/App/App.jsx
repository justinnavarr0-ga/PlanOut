import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';

import TripPage from '../TripPage/TripPage';
import MyCheckList from '../MyCheckList/MyCheckList';
import HomePage from '../HomePage/HomePage';





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
            <Route path="/trips" element={<TripPage user={user}/>}/>
            <Route path="/checklist" element={<MyCheckList user={user}/>}/>
            <Route path="/*" element={<HomePage/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

