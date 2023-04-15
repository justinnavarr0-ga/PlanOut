import { useState } from 'react'
import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import NewNotePage from '../NewNotePage/NewNotePage'
import { ChatEngine } from 'react-chat-engine';
export default function App() {

  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/orders/" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<ChatEngine
              projectID='d41212d7-d4d5-4d52-aa60-acca47bad2eb'
              userName='Justin'
              userSecret='eae3ea60-10e9-4d5a-82dd-96aca72833f7'/>
            } 
         />
            <Route path="/notes" element={<NewNotePage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

