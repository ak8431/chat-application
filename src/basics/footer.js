import React from 'react';

const Footer = (props)=>{
	return (
		<footer className="navbar navbar-default navbar-fixed-bottom">
			<div className="container-fluid">
				<div style={{paddingTop:"15px", fontWeight:"bold",color:"black"}}>
					<div className="pull-left">&copy; All Rights Reserved </div>
					<div className="pull-right"> v({props.version})</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;