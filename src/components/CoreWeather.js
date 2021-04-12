import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ShowDays from "./ShowDays";
import ShowHours from "./ShowHours";
import DayDetail from "./DayDetail";
import ShowCurr from "./ShowCurr";

function CoreWeather(props) {
  const forecastData = props.values.forecast.forecastday;
  const weatherData = props.values;

  const [whatToShow, setwhatToShow] = useState(props.show);
  const [dayDetIndex, setdayDetIndex] = useState();
  const [renderList, setrenderList] = useState("");
  let dayList = [];
  let hourList = [];

  useEffect(() => {
    switch (whatToShow) {
      case "day":
        for (let i = 0; i < forecastData.length; i++) {
          dayList.push(
            <ShowDays
              id={i}
              key={nanoid()}
              day={forecastData[i].date}
              weatherIcon={forecastData[i].day.condition.icon}
              weatherCond={forecastData[i].day.condition.text}
              tempHigh={forecastData[i].day.maxtemp_c}
              tempLow={forecastData[i].day.mintemp_c}
              rainProb={forecastData[i].day.daily_chance_of_rain}
              dayPopul={dayDetailPopulate}
            />
          );
        }
        setrenderList(dayList);
        break;
      case "curr":
        setrenderList(
          <ShowCurr
            id={nanoid()}
            key={nanoid()}
            day={weatherData.current.date}
            currTime={weatherData.current.last_updated.slice(-5)}
            weatherIcon={weatherData.current.condition.icon}
            weatherCond={weatherData.current.condition.text}
            currTemp={weatherData.current.temp_c}
            feelTemp={weatherData.current.feelslike_c}
            uvIndex={weatherData.current.uv}
            currWind={weatherData.current.wind_kph}
            currPrecip={weatherData.current.precip_mm}
            currHumidity={weatherData.current.humidity}
            currVisibility={weatherData.current.vis_km}
            currWindDir={weatherData.current.wind_dir}
            currWindGust={weatherData.current.gust_kph}
            currPressure={weatherData.current.pressure_mb}
            currCloud={weatherData.current.cloud}
            sunImg={"/sun.svg"}
            moonImg={"/moon.svg"}
            sunRise={forecastData[0].astro.sunrise}
            sunSet={forecastData[0].astro.sunset}
            moonRise={forecastData[0].astro.moonrise}
            moonSet={forecastData[0].astro.moonset}
          />
        );
        break;
      case "hour":
        for (let i = parseInt(weatherData.current.last_updated.slice(-5,-3)); i < 24; i++) {
          hourList.push(
            <ShowHours
              id={nanoid()}
              key={nanoid()}
              hour={`${i > 12 ? i - 12 : i} ${i <= 12 ? "AM" : "PM"}`}
              day={forecastData[0].date}
              weatherIcon={forecastData[0].hour[i].condition.icon}
              weatherCond={forecastData[0].hour[i].condition.text}
              tempAvg={forecastData[0].hour[i].temp_c}
              tempFeel={forecastData[0].hour[i].feelslike_c}
              rainProb={forecastData[0].hour[i].chance_of_rain}
              uvIndex={forecastData[0].hour[i].uv}
              wind={forecastData[0].hour[i].wind_kph}
              precip={forecastData[0].hour[i].precip_mm}
              humidity={forecastData[0].hour[i].humidity}
              visibility={forecastData[0].hour[i].vis_km}
              windDir={forecastData[0].hour[i].wind_dir}
              windGust={forecastData[0].hour[i].gust_kph}
              pressure={forecastData[0].hour[i].pressure_mb}
              cloud={forecastData[0].hour[i].cloud}
              dewPoint={forecastData[0].hour[i].dewpoint_c}
              heatIndex={forecastData[0].hour[i].heatindex_c}
            />
          );
        }
        setrenderList(hourList);
        break;
      case "dayDet":
        setrenderList(
          <DayDetail
            id={dayDetIndex}
            day={forecastData[dayDetIndex].date}
            weatherIcon={forecastData[dayDetIndex].day.condition.icon}
            weatherCond={forecastData[dayDetIndex].day.condition.text}
            tempAvg={forecastData[dayDetIndex].day.avgtemp_c}
            rainProb={forecastData[dayDetIndex].day.daily_chance_of_rain}
            uvIndex={forecastData[dayDetIndex].day.uv}
            maxWind={forecastData[dayDetIndex].day.maxwind_kph}
            totalPrecip={forecastData[dayDetIndex].day.totalprecip_mm}
            avgHumidity={forecastData[dayDetIndex].day.avghumidity}
            avgVisibility={forecastData[dayDetIndex].day.avgvis_km}
            sunImg={"/sun.svg"}
            moonImg={"/moon.svg"}
            sunRise={forecastData[dayDetIndex].astro.sunrise}
            sunSet={forecastData[dayDetIndex].astro.sunset}
            moonRise={forecastData[dayDetIndex].astro.moonrise}
            moonSet={forecastData[dayDetIndex].astro.moonset}
          />
        );
        break;
      default:
    }
  }, [whatToShow]);

  function dayDetailPopulate(i) {
    setwhatToShow("dayDet");
    setdayDetIndex(i);
  }

  return (
    <>
      <nav className="nav-class">
        <button className="toggle-screen" onClick={() => setwhatToShow("curr")}>NOW</button>
        <button className="toggle-screen" onClick={() => setwhatToShow("day")}>DAY</button>
        <button className="toggle-screen" onClick={() => setwhatToShow("hour")}>Hourly</button>
      </nav>
      {renderList}
    </>
  );
}

export default CoreWeather;
