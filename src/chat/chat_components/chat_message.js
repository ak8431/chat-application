import React from 'react';

export default class ChatMessage extends React.Component{
    render(){
        let {id, name, type, text, created} = this.props;
        
        let textMessageClass = "my-message", liClass = "";

        let messageData = <div className="message-data">
                            <span className="message-data-name"><i className="fa fa-circle online"></i> {name}</span>
                            <span className="message-data-time">{created}</span>
                        </div>;

        if(type==="receiver"){
            textMessageClass = "other-message float-right";
            liClass = "clearfix";
            messageData = <div className="message-data align-right">
                                <span className="message-data-time" >{created}</span> &nbsp; &nbsp;
                                <span className="message-data-name" >{name}</span><i className="fa fa-circle me"></i>
                            </div>;
        }
        return(
            <li className={liClass} id={id}>
                {messageData}
                <div className={"message "+ textMessageClass}>
                    {text}
                </div>
            </li>
        )
    }
}