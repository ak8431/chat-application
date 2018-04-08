import React from 'react';
import ChatMessage from './chat_message';

export default class ChatHistory extends React.Component{
    render(){
      let {message, typing} = this.props;
      let message_list = message.map((m, index)=>
          <ChatMessage
            key={index}
            id={m.id}
            text={m.text}
            type={m.type}
            name=""
            created={m.created_at}
          />
      );
      return(
          <ul id="chat_list">
            {message_list} 
            {typing && <div className="message-typing">{typing}</div>}                 
          </ul>
        )
    }
}