import React from 'react';
import './LoadingDots.css'; // Make sure to import the CSS file

const LoadingDots = () => {
    return (
        <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
};

export default LoadingDots;
