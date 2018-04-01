import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/home" className="navbar-brand">
                <img src={logo} style={{height: "50px",marginTop: "-15px",color:"red !important"}} className="App-logo" alt="logo" />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/home">Home <span className="sr-only">(current)</span></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
              
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/notifications">Notifications</Link></li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="">Amit Kumar</a></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/home">Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}