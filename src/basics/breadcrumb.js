import React from 'react';
import { Link } from 'react-router-dom';

export default class BreadCrumb extends React.Component{
	render(){
		let i = Math.random();
		let arrow = <span className="fa fa-angle-right"></span>;
		let breadCrumb, currentUrl = "Home";
		let browserUrl = document.URL.replace("http://localhost:3000/", "/");
		if(!!this.props.url.props.children){
			this.props.url.props.children.map((url)=>{
				if(url.props.path===browserUrl){
					switch(url.props.path){
						case '/home': currentUrl = "Home";
							break;
						case '/about': currentUrl = "About";
							break;
						case '/contact-us': currentUrl = "Contact";
							break;
						case '/chat': currentUrl = "Chat";
							break;
						case '/notifications': currentUrl = "Notifications";
							break;
						case '/settings': currentUrl = "Settings";
							break;
						case '/profile': currentUrl = "Profile";
							break;
						default : currentUrl = "Home";
					};
					return breadCrumb = <li key={i*i}><Link to={url.props.path}>{currentUrl} </Link>{arrow}</li>;
				}
			});
		}
		if(!breadCrumb){
			breadCrumb = <li key={i+1}><Link to={browserUrl}>{currentUrl} </Link>{arrow}</li>;
		}
		return(
			<ol className="breadcrumb" style={{marginBottom:0}}>
				{breadCrumb}
			</ol>
		);
	}
}