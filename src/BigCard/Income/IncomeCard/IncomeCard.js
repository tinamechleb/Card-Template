import React from 'react';
import './IncomeCard.css';

function IncomeCard() {
    return (
        <>
            <div className="Income-Grid">
                <div className="Income-Card">
                    <p className="Income-Title">Title 1</p>
                    <p className="Income-amount">800$</p>
                </div>
                <div className="Buttons">
                    {/* <input className="edit" type="button" value="edit" />
                    <input className="delete" type="button" value="delete" /> */}
                    <div className="Image Delete" />
                    <div className="Image Edit" />
                </div>
            </div>
        </>
    );
}

export default IncomeCard;
