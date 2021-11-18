/**
 * Importing React component from react component
 */

import React from 'react';
import {connect} from 'react-redux'
/**
 * 
 * @params Creating function Headercomponent 
 * exporting the default Headercomponent
 */
 const mapStateToProps =(state)=>({
    history:state.reduxState?.state?.history
  
    
  })
const Headercomponent =(props)=>  {

        return (
            <>
            <div class = "container d-flex flex-column align-items-center">
           <h1>Calculator</h1>
           <p>No.of calculations:{props.history?.length}</p>
           </div>
           </>
        );
    }


export default connect(mapStateToProps)(Headercomponent);