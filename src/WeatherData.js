import React from 'react';

const WeatherData = ({weatherData}) => {
    return (
        
        <div>
          <center><h1>UV index</h1></center>
         
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{weatherData.value}</h5>
              </div>
            </div>
        </div>
    )
  };

  export default WeatherData