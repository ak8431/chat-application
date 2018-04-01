import React from 'react';

export default class PeopleSearch extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            searchPeople : null
        }
    }

    searchPeopleList(e){
        console.log('getting user name from typing', e.target.value);
    }

    render(){
        return(
            <div className="search">
                <input type="text" placeholder="search" onKeyUp={e=>this.searchPeopleList(e)} />
                <i className="fa fa-search"></i>
            </div>
        )
    }
}