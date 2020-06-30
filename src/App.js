import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import apiConfig from './kuchika.js';


class Container extends React.Component {

    constructor(props) {    
        super(props);    
        this.state = {      
            value: null,    
        };  
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( (position) => {
            alert("latitude is: " + position.coords.latitude + "\n" 
                    + "longitude is: " + position.coords.longitude);
            
            const currentweather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiConfig.weathe_api_key}&units=metric`;
            const uvindex_url = `https://api.openweathermap.org/data/2.5/uvi/forecast?appid=${apiConfig.weathe_api_key}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=1`;

            const getUVindex = () => {
                fetch(uvindex_url)
                .then(res => res.json())
                .then(data => console.log("Data loaded", data.list))
            }
        })
    }



    render() {

           return(
            <div>
                <Navbar/>
                <div className="container">
                    <Row/>
                </div>
            </div>
           );
    }
}

class Row extends React.Component {
    renderColumn() {
        return(
            <Column/>
        );
    }
    render() {
        return(
            <div className="row">
                {this.renderColumn()}
                {this.renderColumn()}
            </div>
        );
    }
}

class Column extends React.Component {
    render() {
        return(
            <div className="col">
                <h1>Hello world!</h1>
            </div>
        );
    }
}


export default Container;