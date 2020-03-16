import React from 'react';
import './IncomeCard.css';

function IncomeCard() {
    return (
        <>
            <div className="Income-Grid">
                <div className="Income-Card">
                    <h4>Title 1</h4>
                    <h5>800$</h5>
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
