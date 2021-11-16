/**
 * Importing the React component from react
 * creating the button and exporting it
 */
import React from 'react';

const Button = (props) => {
    const { className, handleClick, value } = props;
    return (
        <button className={className} onClick={handleClick} value={value}>
          {value}
        </button>
      );
}

export default Button;
