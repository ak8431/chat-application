import React from 'react';

export default class SettingIcon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon : null
        }
    }

    render(){
        return(
            <span className="">
                <i className="fa fa-setting"></i>
            </span>
        )
    }
}