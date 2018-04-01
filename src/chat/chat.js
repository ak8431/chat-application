import React from 'react';
import ChatHeader from './chat_components/chat_header';
import ChatHistory from './chat_components/chat_history';
import SendMessage from './chat_components/message_sending';

export default class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeConversation : props.activeConversation,
            messageResponses: [
                'Why did the web developer leave the restaurant? Because of the table layout.',
                'How do you comfort a JavaScript bug? You console it.',
                'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
                'What is the most used language in programming? Profanity.',
                'What is the object-oriented way to become wealthy? Inheritance.',
                'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
              ]
        }
        this.sendMessage     = this.sendMessage.bind(this);
    }

    componentWillReceiveProps(nxtProps){
        if(nxtProps.activeConversation.id!==this.state.activeConversation.id){
            this.setState({activeConversation : nxtProps.activeConversation});
        }
    }

    sendMessage(text){
        let _this = this;
        // console.log('text in chat', text);
        // return false;
        let activeConversation = _this.state.activeConversation;
        let message = {
            id : Math.floor(Math.random * Math.PI),
            text,
            type : "sender",
            created_at : new Date().toLocaleTimeString()
        }
        activeConversation.message.push(message);
        _this.setState({activeConversation});
        setTimeout(function(){
            _this.replyByReceiver(activeConversation);
        },1000);
    }

    replyByReceiver(activeConversation){
        let text = this.getRandomItem(this.state.messageResponses);
        let message = {
            id : Math.floor(Math.random * Math.PI),
            text,
            type : 'receiver',
            created_at : new Date().toLocaleTimeString()
        }
        activeConversation.message.push(message);
        this.setState({activeConversation});
    }

    getRandomItem(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
      }

    render(){
        let {activeUser} = this.props;
        let {activeConversation} = this.state;
        // console.log('activeConversation', activeConversation);
        return(
            <div className="chat-history">
                <ChatHeader activeUser={activeUser} messageLength={activeConversation.message} />
                <ChatHistory activeUser={activeUser} message={activeConversation.message} />
                <SendMessage sendMessage={this.sendMessage} activeUser={activeUser} activeConversation={activeConversation} />
            </div>
        )
    }
}