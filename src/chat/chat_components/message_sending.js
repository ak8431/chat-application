import React from 'react';

export default class SendMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chatMessage : null
        }
    }

    typeMessage(e){
        // console.log('typing message', e.target.value);
        if(e.target.value.trim()===''){
            this.props.typingMessage();
            e.target.value = "";
            return false;
        }
        this.props.typingMessage('Typing');
        this.props.setHeight();
        this.setState({chatMessage : e.target.value});
        if(e.keyCode===13){
            this.sendMessage(e.target.value);
            e.target.value = "";
        }
    }

    sendMessage(msg){
        let text = this.state.chatMessage;
        if(msg){
            text = msg;
        }
        console.log('sendMessage', text);
        // return false;
        this.props.sendMessage(text);
        this.props.typingMessage();
        this.setState({chatMessage : null});
    }

    render(){
        return(
            <div className="chat-message clearfix">
                <textarea name="message-to-send" onKeyUp={e=>this.typeMessage(e)} 
                    id="message-to-send" placeholder ="Type your message" rows="3">
                </textarea>      
                <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>
                <button onSubmit={e=>this.sendMessage(e)}>Send</button>
            </div>
        )
    }
}