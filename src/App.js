import React, { useState, useEffect } from "react";
import CoreWeather from "./components/CoreWeather";
import ShowTopCurr from "./components/ShowTopCurr";

function App() {
  const [showCurrTop, setShowCurrTop] = useState("");
  const [geoLoc, setGeoLoc] = useState("");
  const [weatherRender, setweatherRender] = useState("");
  const [loading, setLoading] = useState("");

  //get geolocation once when first rendered
  useEffect(() => {
    getGeoLoc();
    setLoading(<div className="loader"> loading...</div>);
  }, []);

  //fetch weather data and render current weather
  useEffect(() => {
    if (geoLoc !== "") {
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
          setLoading("");
          setShowCurrTop(
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
    }
  }, [geoLoc]);

  //geo location function
  function getGeoLoc() {
    navigator.geolocation.getCurrentPosition(getPos);
  }
  function getPos(position) {
    setGeoLoc(`${position.coords.latitude},${position.coords.longitude}`);
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
