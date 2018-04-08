import React from 'react';

export default class InternetConnectivity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            netConnectivity : null
        }
    }

    componentDidMount(){
        let _this = this;
        window.addEventListener('online', function(){
            _this.updateOnlineStatus();
        });
        window.addEventListener('offline', function(){
            _this.updateOnlineStatus();
        });
    }

    updateOnlineStatus(){
        console.log('function called');
        let name = navigator.onLine ? 'online' : 'offline';
        let netConnectivity = {
            name,
            hide : navigator.onLine
        }
        this.setState({netConnectivity});
    }

    render(){
        let {netConnectivity} = this.state;
        let name = netConnectivity && netConnectivity.name;
        let statusClass = name==='online' ? 'bg-success' : 'bg-danger'
        
        return(
            <div className={statusClass + " internet text-center " + name}>
                { netConnectivity &&
                        <span>{name}</span>
                }
            </div>
        )
    }
}