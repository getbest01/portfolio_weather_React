function ShowDays(props) {
  return (
    <div className="daily-fcst-wrap">
    <div className="daily-forecast" onClick={() => props.dayPopul(props.id)}>
      <div className="daySection">
        <span className="day-of-week">{dayOfTheWeek(new Date(props.day))}</span>
        <span className="day-day">
          {props.day.slice(-5, -3).replace("-", "/").replace(/^0+/, "") +
            "/" +
            props.day.slice(-2).replace("-", "/").replace(/^0+/, "")}
        </span>
      </div>
      <img
        className="weather-icon"
        alt="weather Condition"
        src={props.weatherIcon}
      ></img>
      <div className="temp">
        <span className="high">{parseInt(props.tempHigh) + "\xB0"}</span>
        <span className="low">{"/" + parseInt(props.tempLow) + "\xB0"}</span>
      </div>
      <div className="weather-comments">{props.weatherCond}</div>
      <div className="precip">
        <img alt="rain drop" className="precip-icon" src="/drop-icon.svg"></img>
        <span>{props.rainProb + "%"}</span>
      </div>
    </div>
    </div>
  );

  function dayOfTheWeek(a) {
    let retVal;
    switch (a.getDay()) {
      case 0:
        retVal = "MON";
        break;
      case 1:
        retVal = "TUE";
        break;
      case 2:
        retVal = "WED";
        break;
      case 3:
        retVal = "THU";
        break;
      case 4:
        retVal = "FRI";
        break;
      case 5:
        retVal = "SAT";
        break;
      case 6:
        retVal = "SUN";
        break;
      default:
    }
    return retVal;
  }
}

export default ShowDays;
