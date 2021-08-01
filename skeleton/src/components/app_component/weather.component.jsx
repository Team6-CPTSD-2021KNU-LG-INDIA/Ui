import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
      <div className="container text-light">
        <div className="Card">
          <div style={{float:"left"}}>
          <h1 style={{fontSize:"15px", color:"skyblue", float:"left"}}>{props.cityname}</h1>
          
          <h5 className="py-4" style={{float:"right",marginRight:"20px"}}>
            <i className={`wi ${props.weatherIcon} display-1`} style={{fontSize:"50px"}}/>
          </h5>
          
          {/* Get Celsius */}
          {props.temp_celsius ? (
            <h1 style={{fontSize:"15px", color:"black", float:"left"}}>{props.temp_celsius}&deg;</h1>
          ) : null}
  
          {/* show max and min temp */}
          <h1 style={{fontSize:"4px", color:"black", float:"left"}}>{maxminTemp(props.temp_min, props.temp_max)}</h1>
  
          {/* Weather description */}
          <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h4>
          </div>
        </div>
      </div>
    );
  };
export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
