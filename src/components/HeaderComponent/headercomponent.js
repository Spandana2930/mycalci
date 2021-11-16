/**
 * Importing React component from react component
 */

import React, { Component } from 'react';

/**
 * 
 * @params Creating function Headercomponent 
 * exporting the default Headercomponent
 */

const Headercomponent =()=>  {

        return (
            <>
            <div class = "container d-flex flex-column align-items-center">
           <h1>Calculator</h1>
           </div>
           </>
        );
    }


export default Headercomponent;