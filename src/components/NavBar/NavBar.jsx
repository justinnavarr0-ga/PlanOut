import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, updateUser}) {

  function handleLogOut(){
    userService.logOut()
    updateUser(null)
  }

  return (
    <nav>
      <Link to="/checklist">My Checklist</Link>
      &nbsp; | &nbsp;
      <Link to="/trips">My Trips</Link>
      &nbsp; | &nbsp;
      <Link to="/chat">Chat</Link>
      <h2>Welcome, {user.name}</h2>
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

