import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  const [showForm, setShowForm] = useState()
  
  
  return (
    <div className="h-screen w-full bg-gradient-to-t from-purple-400 to-purple-100 flex justify-left items-center">
    <div className="text-center">
      <h1 className="font-bold text-6xl mb-10 rounded-lg ml-20" >Welcome to</h1>
      <h1 className="font-bold text-6xl mb-10 rounded-lg ml-60" >PlanOut</h1>
      {showForm && <SignUpForm setUser={setUser}/>}
      {!showForm && <LoginForm setUser={setUser}/>}
      <h6 className="font-bold text-20 mb-10" onClick={() => setShowForm(!showForm)}>
        <p className='ml-20 mt-40'>{showForm ? 'Already Have An Account? Login Here' : 'New to the site? Click Here To Create An Account!'}</p>
      </h6>
    </div>
  </div>
  )
}
  