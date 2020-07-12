import React from 'react';

const WeatherData = ({weatherData}) => {

    return (
        
        <div>
          <center><h1>UV index</h1></center>
         
            <div className="card" id="uvcard">
              <div className="card-body">
                <h5 className="card-title">{weatherData.value}</h5>
              </div>
            </div>
        </div>
    )

  };

  



  export default WeatherData