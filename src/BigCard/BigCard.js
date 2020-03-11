import React from 'react';
import Income from './Income/Income';
import './BigCard.css';

function BigCard() {
    return (
        <div className="BigCard-Container">
            <div className="BigCard">
                <header className="Header">

                </header>
                <div className="Rest-Of-BigCard">
                    <Income />
                </div>
            </div>
        </div>
    );
}

export default BigCard;
