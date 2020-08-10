import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div className="header">
            <h1>Look at this amazing header!</h1>
            <h3>Too bad we're not using styled components yet...</h3>
            <Button
                label="I want styled components!"
                headerButton={true}
            />
      </div>
    );
}

export default Header;