import React from 'react';
import Button from './Button';

const Content = () => {
    return (
        <div className="content">
            <h2>This is the content of this page</h2>
            <p>You'll find great pages here soon, I promise.</p>
            <Button
                label="Go to all the great pages!"
                headerButton={false}
            />
      </div>
    );
}

export default Content;