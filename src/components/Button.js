import React from 'react';

const Button = ({ label, headerButton }) => {

    // Zorg ervoor dat deze button zich kan gedragen als header button, of als gewone button
    // Dit mag je baseren op de waarde van de headerButton property die true of false kan zijn
    // als headerButton === true gebruiken we de styling van .header-button
    // als headerButton === false gebruiken we de styling van .normal-button

    return (
        <button
            className="normal-button"
            type="button"
        >
            {label}
        </button>
    );
}

export default Button;