import React, { Component } from 'react';
import Header from './basics/header';
import InternetConnectivity from './basics/InternetConnectivity/internet_connect';
// import Footer from './basics/footer';
import BreadCrumb from './basics/breadcrumb';
// import { browserHistory } from 'browser-history';
// import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <InternetConnectivity />
        <Header />
        <div style={{marginTop:"50px"}}>
        <BreadCrumb url={this.props.children} />
          {this.props.children}
        </div>
        {/* <Footer version="1.0" /> */}
    </div>
    );
  }
}
