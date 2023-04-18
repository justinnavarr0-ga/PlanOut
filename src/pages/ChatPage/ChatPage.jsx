import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useState, useEffect, useRef } from 'react';
import * as chatAPI from '../../utilities/chat-api'
export default function ChatPage({user}) {

// useEffect(function() {
//     async function getUser() {
//         // const user = await chatAPI.getUser()

//     }
// })

  return (
    <div>
        <ChatEngine  
            projectID='d41212d7-d4d5-4d52-aa60-acca47bad2eb'
            userName='Justin'
            userSecret='eae3ea60-10e9-4d5a-82dd-96aca72833f7'/>
    </div>
  )
}
