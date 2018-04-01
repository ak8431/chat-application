import React from 'react';

export default class PeopleList extends React.Component{
    render(){
        let {name, age, id, user, getUserDetails} = this.props;
        let _altName = name.split(' ')[0];
        return(
            <li className="clearfix pointer" id={id} onClick={e=>getUserDetails(id, user)}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" 
                    alt={_altName} />
                <div className="about">
                    <div className="name">{name} - {age}</div>
                    <div className="status">
                        <i className="fa fa-circle online"></i> online
                    </div>
                </div>
            </li>
        )
    }
}