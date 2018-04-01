import React from 'react';
import ChatMessage from './chat_message';

export default class ChatHistory extends React.Component{
    render(){
      let {message} = this.props;
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
          <ul>
            {message_list}                  
          </ul>
        )
    }
}