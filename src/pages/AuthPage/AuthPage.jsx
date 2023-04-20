import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  const [showForm, setShowForm] = useState()
  
  
  return (
      <>
        <h1>Auth Page</h1>
        {showForm && <SignUpForm setUser={setUser}/>}
        {!showForm && <LoginForm setUser={setUser}/>}
        <br />
        <h6 onClick={() => setShowForm(!showForm)}>{showForm ? 'Already Have An Account? Login Here' : 'New to the site? Click Here To Create An Account!'}</h6>
      </>      
  )
}
  