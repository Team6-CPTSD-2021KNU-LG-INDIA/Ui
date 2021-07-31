import React from 'react';
import { MDBCol, MDBFormInline,  MDBIcon  } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
//npm install --save mdbreact

const Crawtemplate =()=>{

    
    return (
        <MDBCol md="6">
        <MDBFormInline className="md-form">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        </MDBFormInline>
      </MDBCol>
    );
};

    

export default Crawtemplate;