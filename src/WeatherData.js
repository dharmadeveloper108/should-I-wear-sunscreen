import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { yellow } from '@material-ui/core/colors';


const WeatherData = ({weatherData}) => {
    return (
        <div>
          <center><h1>Should I wear sunscreen? </h1></center>
          <center><h6>- UV index 😎 today -</h6></center>
            <div className="card" id="uvcard">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <center>
                      <div id="separator"></div>
                        <h5 id="titles">
                          UV index: {weatherData.value}
                        </h5>
                          <CircularProgress 
                          id="circularProg" 
                          style={{color: yellow[500], marginTop: 60}}
                          size={80} />
                        <h5 class="levelInd" id="titles2">
                          Level: <span id="lvl"></span>
                        </h5>
                      <p id="answer"> </p>
                    </center>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <img id="memegif" class="col-12" alt="gif"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  };

  export default WeatherData