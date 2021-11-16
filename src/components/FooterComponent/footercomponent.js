/**
 * Importing React from the react component
 */

import React from 'react';
import {Link} from 'react-router-dom'

/**
 * 
 * @params Creating function FooterComponent()
 */

export default function Footercomponent() {
    return (
        <div>
            <Link to = "/about">
            <button>Click here to view About Page.</button>
            </Link>
        </div>
    )
}
