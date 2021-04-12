function ShowCurr(props) {
  return (
    <div className="curr-detail">
      <div className="curr-det-weather">
        <div className="curr-top-head">
          <h4>CURRENT WEATHER</h4>
          <span className="curr-time">{Date().slice(16,21)}</span>
        </div>
        <div className="curr-top-weather">
          <img
            className="curr-detail-weather-icon"
            alt="weather Condition"
            src={props.weatherIcon}
          ></img>
          <div className="curr-temp-grp">
            <span className="curr-temp">{parseInt(props.currTemp) + "\xB0"}</span>
            <span className="curr-temp-feel">
              {"RealFeel " + parseInt(props.feelTemp) + "\xB0"}
            </span>
          </div>
        </div>
        <p className="curr-weather-comments">{props.weatherCond}</p>
        <div className="curr-detail-rest">
          <p className="panel-item">
            Max UV
            <span>{props.uvIndex}</span>
          </p>
          <p className="panel-item">
            Wind
            <span>{props.currWindDir + " " + parseInt(props.currWind) + " km/h"}</span>
          </p>
          <p className="panel-item">
            Wind Gusts
            <span>{parseInt(props.currWindGust) + " km/h"}</span>
          </p>

          <p className="panel-item">
            Visibility
            <span>{props.currVisibility + " km"}</span>
          </p>
          <p className="panel-item">
            Precipitation
            <span>{props.currPrecip + " mm"}</span>
          </p>
          <p className="panel-item">
            Humidity
            <span>{props.currHumidity + "%"}</span>
          </p>
          <p className="panel-item">
            Pressure
            <span>{props.currPressure + " mb"}</span>
          </p>
          <p className="panel-item">
            Cloud Cover
            <span>{props.currCloud + "%"}</span>
          </p>
        </div>
      </div>
      <div className="day-det-astro">
        <h4>RISE/SET</h4>
        <div className="day-det-astro-panels">
          <div className="day-det-astro-left">
            <img
              className="day-det-astro-sun"
              alt="sun"
              src={props.sunImg}
            ></img>
            <p className="panel-item">
              Rise
              <span>{props.sunRise}</span>
            </p>
            <p className="panel-item">
              Set
              <span>{props.sunSet}</span>
            </p>
          </div>

          <div className="day-det-astro-right">
            <img
              className="day-det-astro-moon"
              alt="moon"
              src={props.moonImg}
            ></img>
            <p className="panel-item">
              Rise
              <span>{props.moonRise}</span>
            </p>
            <p className="panel-item">
              Set
              <span>{props.moonSet}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCurr;
