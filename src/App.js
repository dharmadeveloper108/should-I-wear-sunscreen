import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import API_KEY from './kuchika.js';
import WeatherData from './WeatherData.js';
import elmorise from './images/fb4.gif';
import thisisfine from './images/c41.gif';
import hot from './images/hot.gif';
import maybe from './images/maybe.gif';
import nah from './images/FlamboyantEasygoingGopher.gif';
import calculating from './images/tenor.gif';

class Container extends React.Component {

    state = {      
        weatherData: [],
    }; 
    
    render() {
        return(
         <div>
             <Navbar/>
             <div className="container">
                 <WeatherData weatherData={this.state.weatherData}/>
             </div>
         </div>
        );
    }

    componentDidMount() {
        var titles = document.getElementById("titles");
        var titles2 = document.getElementById("titles2");
        document.getElementById('memegif').setAttribute("src", calculating);

        navigator.geolocation.getCurrentPosition( (position) => {
           
            const lat = position.coords.latitude.toFixed(2);
            const long = position.coords.longitude.toFixed(2);

            const uvindex_url = `http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${lat}&lon=${long}`;
            
            fetch(uvindex_url)
            .then(res => handleResponse(res))
            .then((data) => {
                this.setState({ weatherData: data });
                setElementsCont(data);
                document.getElementById('circularProg').style.display = "none";
                titles.style.visibility = "visible";
                titles2.style.visibility = "visible";
            })
            .catch(console.log);
        })
    }
}

function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: Location " + (response.statusText).toLowerCase());
    }
  }


  //TODO clean up the spaghetti and 'reactify' 
  function setElementsCont(weatherData) {
    const UV_level = weatherData.value;

    const colorId = document.getElementById('uvcard');
    const titleId = document.getElementById('lvl');
    const imageId = document.getElementById('memegif');
    const parId = document.getElementById('answer');
    const separator = document.getElementById('separator');

    if(UV_level<= 2) {
        colorId.style.backgroundColor = "#fecd25";
        titleId.innerHTML = "LOW ⛅";
        imageId.setAttribute("src", nah);
        parId.innerHTML = "Naaah you're good.";
        separator.style.height = "50px";
    } else if(UV_level<= 5) {
        colorId.style.backgroundColor = "#feac25";
        titleId.innerHTML =  "MODERATE 🌤️";
        imageId.setAttribute("src", maybe);
        parId.innerHTML = "Yeah it would be better, but it's not indispensable.";
        separator.style.height = "100px";
    } else if(UV_level<= 7) {
        colorId.style.backgroundColor = "#e25d1b";
        titleId.innerHTML =  "MEDIUM 🌞";
        imageId.setAttribute("src", hot);
        parId.innerHTML = "Yeah it's safer to wear it.";
        separator.style.height = "80px";
    } else if (UV_level<= 10) {
        colorId.style.backgroundColor = "#cb493c";
        titleId.innerHTML = "HIGH 🥵";
        imageId.setAttribute("src", thisisfine);
        parId.innerHTML = "YES! Definitly wear it!";
        separator.style.height = "150px";
    } else if (UV_level>= 11) {
        colorId.style.backgroundColor = "#5650a2";
        titleId.innerHTML =  "VERY HIGH 🔥";
        imageId.setAttribute("src", elmorise);
        parId.innerHTML = "YES! How are you not on fire yet?";
        separator.style.height = "50px";
    }
  }
  
export default Container;