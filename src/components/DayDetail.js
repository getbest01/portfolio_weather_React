function DayDetail(props) {
  return (
    <div className="day-detail">
      <div className="day-det-weather">
        <div className="day-detail-head">
          <img
            className="day-detail-weather-icon"
            alt="weather Condition"
            src={props.weatherIcon}
          ></img>
          <div className="temp">
            <span className="temp-avg">{props.tempAvg + "\xB0"}</span>
          </div>
          <div className="day-detail-day">
            <span className="day-day">
              {props.day.slice(-5, -3).replace("-", "/").replace(/^0+/, "") +
                "/" +
                props.day.slice(-2).replace("-", "/").replace(/^0+/, "")}
            </span>
          </div>
        </div>
        <p className="day-det-weather-comments">{props.weatherCond}</p>
        <div className="day-detail-rest">
          <div className="day-detail-left">
            <p className="panel-item">
              Max UV
              <span>{props.uvIndex}</span>
            </p>
            <p className="panel-item">
              Wind
              <span>{props.maxWind + " km/h"}</span>
            </p>
            <p className="panel-item">
              Visibility
              <span>{props.avgVisibility + " km"}</span>
            </p>
          </div>
          <div className="day-detail-right">
            <p className="panel-item">
              Precipitation
              <span>{props.totalPrecip + " mm"}</span>
            </p>
            <p className="panel-item">
              Probability of Precipitation
              <span>{props.rainProb + "%"}</span>
            </p>
            <p className="panel-item">
              Humidity
              <span>{props.avgHumidity + "%"}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="day-det-astro">
        <h4>SUNRISE/SUNSET</h4>
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

export default DayDetail;
