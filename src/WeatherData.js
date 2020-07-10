import React from 'react';

const WeatherData = ({weatherData}) => {
    return (
        <div>
        <center><h1>Contact List</h1></center>
        {weatherData.map((weather) => (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{weather.value}</h5>
                </div>
            </div>
        ))}
        </div>
    )
  };

  export default WeatherData