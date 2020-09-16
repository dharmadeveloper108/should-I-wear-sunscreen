import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import * as Keys from './kuchika.js';
import WeatherData from './WeatherData.js';
import calculating from './images/tenor.gif';

class Container extends React.Component {

    state = {
        weatherData: [],
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <WeatherData weatherData={this.state.weatherData} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        var titles = document.getElementById("titles");
        var titles2 = document.getElementById("titles2");
        document.getElementById('memegif').setAttribute("src", calculating);

        navigator.geolocation.getCurrentPosition((position) => {

            const lat = position.coords.latitude.toFixed(2);
            const long = position.coords.longitude.toFixed(2);

            const uvindex_url = `http://api.openweathermap.org/data/2.5/uvi?appid=${Keys.API_KEY}&lat=${lat}&lon=${long}`;

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

const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: Location " + (response.statusText).toLowerCase());
    }
}


async function setElementsCont (weatherData) {
    const UV_level = weatherData.value;

    if (UV_level <= 2) {
        setAttr("#fecd25", "LOW ⛅",  await setGif("nah"), "Naaah you're good.");
    } else if (UV_level <= 5) {
        setAttr("#feac25", "MODERATE 🌤️", await setGif("maybe"), "Yeah it would be better, but it's not indispensable.");
    } else if (UV_level <= 7) {
        setAttr("#e25d1b", "MEDIUM 🌞", await setGif("thatshot"), "Yeah it's safer to wear it.");
    } else if (UV_level <= 10) {
        setAttr("#cb493c", "HIGH 🥵", await setGif("hell"), "YES! Definitly wear it!");
    } else if (UV_level >= 11) {
        setAttr("#5650a2", "VERY HIGH 🔥", await setGif("flames"), "YES! How are you not on fire yet?");
    } 
}

async function setGif (keyword) {
    let giphyQuery = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${Keys.GIPHY_KEY}`;

    const response = await fetch(giphyQuery, {});
    const json = await response.json();

    return json.data[Math.floor(Math.random() * json.data.length)].images.downsized.url;
}

const setAttr = (color, titleText, image, parText) => {

    const colorId = document.getElementById('uvcard');
    const titleId = document.getElementById('lvl');
    const imageId = document.getElementById('memegif');
    const parId = document.getElementById('answer');

    colorId.style.backgroundColor = color;
    titleId.innerHTML = titleText;
    imageId.setAttribute("src", image);
    parId.innerHTML = parText;
}

export default Container;