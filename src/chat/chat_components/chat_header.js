import React from 'react';

export default class ChatHeader extends React.Component{
    render(){
        let {activeUser, messageLength} = this.props;
        return(
            <div className="chat-header clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" 
                    alt={activeUser.name} />
                <div className="chat-about">
                    <div className="chat-with">Chat with {activeUser.name}</div>
                    <div className="chat-num-messages">already {messageLength.length} messages</div>
                </div>
                <i className="fa fa-star"></i>
            </div>
        )
    }
}