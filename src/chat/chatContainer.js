import React from 'react';
import PeopleList from './peopleList';
import Chat from './chat';
import PeopleSearch from './people_components/people_search';
let people_list = require('../data/people_list');
let chat_list   = require('../data/chat_list');

export default class ChatContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeUser : null,
            activeConversation : null
        }
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    getUserDetails(id, activeUser){
        let conversation_details = chat_list.find(c=>c.id===id);
        // console.log('conversation_details', conversation_details);
        this.setState({activeUser, activeConversation : conversation_details});
    }

    render(){
        let people = people_list.map((p, index)=>
            <PeopleList key={index}
                user={p}
                id={p.id}
                getUserDetails={this.getUserDetails}
                name={p.name}
                age={p.age}
                created={p.created_at}
                dob={p['D.O.B']}
            />
        );
        let {activeUser, activeConversation} = this.state;
        return(
            <div className="chat_container clearfix">
                <div className="">
                    <div className="people-list" id="people-list">
                        <PeopleSearch />
                        <ul className="list">
                            {people}
                        </ul>
                    </div>
                    <div className="chat">
                        {activeUser && <Chat activeUser={activeUser} activeConversation={activeConversation} />}
                    </div>
                </div>
            </div>
        )
    }
}