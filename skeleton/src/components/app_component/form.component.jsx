import React from "react";
import { useState } from "react/cjs/react.development";
import "./weather.style.css";

const Form = (props) => {

  const[show,setShowed]=useState(false);

 
  return (
    
    <div>
      <div className="thisform" style={{marginTop:"-60px"}}>
            <button onClick={(e) =>{ 
              
              setShowed(false); }} style={{borderRadius:"180px",background:"none",
            float:'right',width:"35px",height:"35px",fontSize:"15px"}}>+</button>
            <button onClick={(e) => setShowed(true) }style={{borderRadius:"180px",background:"none",width:"35px",
            height:"35px",fontSize:"15px",float:'right',marginRight:"10px"}}>-</button>
      </div>
    <div className="container h-200">
      
      <form onSubmit={props.loadweather}>
     
        
        <div className="row" style={show ? { display: "none" } : { display: "block" }} >
       
            <div style={{width:"150px",height:"10px", fontSize:"3px"}}>
              <input 
                style={{color:'black', float:"left",height:"32px",marginTop:"40px"}}
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
              <input
                style={{color:'black', float:"left",height:"32px"}}
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"
              />
            </div>
            <button className="btn btn-warning" style={{width:"200px", heigth:"1px", fontSize:"12px"}}>Get weather!</button>
            <div> {props.error ? error() : ""}
            </div>
            </div>
           
      </form>
    </div>
    </div>
  );
};

const error = props => {
  
  return (
    <div className="alert alert-danger mx-1" role="alert" style={{width:"100%",hight:"4px",fontSize:"20px"}}>
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
