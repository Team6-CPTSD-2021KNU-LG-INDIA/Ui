import React from 'react';
import { MDBCol, MDBFormInline,  MDBIcon  } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react/cjs/react.development';
import Crawcontent from './Crawcontent';
import './Crawcss.css'
//npm install --save mdbreact

const Crawtemplate =()=>{

    const[input,setInput]=useState();

    const inputhandle=(e)=>
    {
        setInput(e.target.value);  
    }
    
    const onSubmit=(e)=>{
       e.preventDefault();
      

    }


    return (

      <div>
    
        <div style={{marginLeft:"40%"}}>
        <MDBCol md="6">
        <MDBFormInline className="md-form">
          <MDBIcon icon="search" />
          <form>
          <input className="form-control form-control-sm ml-3 w-75" type="text"
           placeholder="Search" aria-label="Search" onChange={inputhandle} />
          <button className="button1" type="button">Click</button>
          </form>
        </MDBFormInline>
        
          </MDBCol>
        
        </div>
          <div>
          <Crawcontent  input={input}>

           </Crawcontent>
        
       </div>
 
    </div>
    

       
    
    
    );
};

    

export default Crawtemplate;