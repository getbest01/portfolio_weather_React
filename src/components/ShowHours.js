import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function ShowHours(props) {
  return (
    <div className="hourly-forecast">
      <Accordion allowMultipleExpanded={false} allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="hourly-head">
                <div className="daySection">
                  <span className="hour-time">{props.hour}</span>
                  <span className="hour-day">
                    {props.day
                      .slice(-5, -3)
                      .replace("-", "/")
                      .replace(/^0+/, "") +
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
                  <span className="temp-avg">{parseInt(props.tempAvg) + "\xB0"}</span>
                </div>
                <div className="temp-feel">
                  <span className="feels-like">{"feels " + parseInt(props.tempFeel) + "\xB0"}</span>
                </div>
                <div className="weather-comments">{props.weatherCond}</div>
                <div className="precip">
                  <img
                    alt="rain drop"
                    className="precip-icon"
                    src="/drop-icon.svg"
                  ></img>
                  <span>{props.rainProb + "%"}</span>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="hourly-rest">
              <p className="panel-item" id="hrly-top-panel">
                Max UV
                <span>{props.uvIndex}</span>
              </p>
              <p className="panel-item">
                Wind
                <span>{props.windDir + " " + parseInt(props.wind) + " km/h"}</span>
              </p>
              <p className="panel-item">
                Wind Gusts
                <span>{parseInt(props.windGust) + " km/h"}</span>
              </p>

              <p className="panel-item">
                Visibility
                <span>{props.visibility + " km"}</span>
              </p>
              <p className="panel-item">
                Precipitation
                <span>{props.precip + " mm"}</span>
              </p>
              <p className="panel-item">
                Humidity
                <span>{props.humidity + "%"}</span>
              </p>
              <p className="panel-item">
                Pressure
                <span>{props.pressure + " mb"}</span>
              </p>
              <p className="panel-item">
                Cloud Cover
                <span>{props.cloud + "%"}</span>
              </p>
              <p className="panel-item">
                Heat Index
                <span>{parseInt(props.heatIndex) + "\xB0C"}</span>
              </p>

              <p className="panel-item">
                Dew Point
                <span>{parseInt(props.dewPoint) + "\xB0C"}</span>
              </p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ShowHours;
