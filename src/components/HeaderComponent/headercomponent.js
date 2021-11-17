/**
 * Importing React component from react component
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
/**
 * 
 * @params Creating function Headercomponent 
 * exporting the default Headercomponent
 */
 const mapStateToProps =(state)=>({
    lowerdisplay:state
  
    
  })
const Headercomponent =()=>  {

        return (
            <>
            <div class = "container d-flex flex-column align-items-center">
           <h1>Calculator</h1>
           <p>No.of calculations:</p>
           </div>
           </>
        );
    }


export default Headercomponent;