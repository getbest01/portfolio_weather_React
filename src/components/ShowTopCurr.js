function ShowTopCurr(props) {
  return (
    <div className="curr-top-banner">
      <span className="currtop-loc">{props.loc}</span>
      <span className="currtop-temp">{parseInt(props.temp) + "\xB0 c"}</span>
      <img
        className="currtop-weather-icon"
        alt="weather Condition"
        src={props.weatherIcon}
      ></img>
    </div>
  );
}
export default ShowTopCurr;
