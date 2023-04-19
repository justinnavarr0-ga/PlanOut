import React from 'react'
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced' 
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic("d41212d7-d4d5-4d52-aa60-acca47bad2eb", props.username.username, props.username.secret)
  return (
    <div style={{ height: "80vh" }}>
     <MultiChatSocket {...chatProps} />
     <MultiChatWindow {...chatProps} style={{height: '80%'}} />
    </div>
  );
};

export default ChatsPage;
