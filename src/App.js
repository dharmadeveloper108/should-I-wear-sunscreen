import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import API_KEY from './kuchika.js';
import WeatherData from './WeatherData.js';


class Container extends React.Component {

    render() {

        return(
         <div>
             <Navbar/>
             <div className="container">
                 <Row/>
                 <WeatherData weatherData={this.state.weatherData}/>
             </div>
         </div>
        );
 }

     state = {      
        weatherData: []   
    }; 
    // constructor(props) {    
    //     super(props);    
         
    // }

    
   
    componentDidMount() {
        navigator.geolocation.getCurrentPosition( (position) => {
            // alert("latitude is: " + position.coords.latitude + "\n" 
            //         + "longitude is: " + position.coords.longitude);

            const lat = position.coords.latitude.toFixed(2);
            const long = position.coords.longitude.toFixed(2);
            
            //const currentweather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
            const uvindex_url = `http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${lat}&lon=${long}`;

            //const getUVindex = () => {
                fetch(uvindex_url)
                .then(res => res.json())
                .then((data) => {
                    this.setState({ weatherData: data })
                })
                .catch(console.log);
            //}
            
        })
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
            </div>
        );
    }
}

class Column extends React.Component {
    render() {
        return(
            <div className="col">
                
            </div>
        );
    }
}


export default Container;