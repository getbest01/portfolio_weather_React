import React, { useState, useEffect } from "react";
import CoreWeather from "./components/CoreWeather";
import ShowTopCurr from "./components/ShowTopCurr";

function App() {
  const [showCurrTop, setshowCurrTop] = useState("");
  const [geoLoc, setgeoLoc] = useState("");
  const [weatherRender, setweatherRender] = useState("");
  const [loading, setloading] = useState("");

  //get geolocation once when first rendered
  useEffect(() => {
    getGeoLoc();
    setloading(<div className="loader"> {loading}</div>);
  }, []);

  //fetch weather data and render current weather
  useEffect(() => {
    fetch(`https://jason-11.herokuapp.com/weathergeo?geo=${geoLoc}`, {
      headers: {
        Accept: "application/text",
        "Content-Type": "application/text",
        "Access-Control-Allow-Origin": "",
      },
      method: "get",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloading("");
        setshowCurrTop(
          <ShowTopCurr
            loc={data.location.name + ", " + data.location.region}
            temp={data.current.temp_c}
            weatherIcon={data.current.condition.icon}
          />
        );
        setweatherRender(<CoreWeather values={data} show="curr" />);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [geoLoc]);

  //geo location function
  function getGeoLoc() {
    navigator.geolocation.getCurrentPosition(getPos);
  }
  function getPos(position) {
    setgeoLoc(`${position.coords.latitude},${position.coords.longitude}`);
  }

  return (
    <>
      {loading}
      {showCurrTop}
      {weatherRender}
    </>
  );
}

export default App;
