import React from 'react';
import './IncomeCard.css';

function IncomeCard() {
    return (
        <>
            <div className="Income-Grid">
                <div className="Income-Card">

                </div>
                <div>
                    <input className="edit" type="button" value="edit" />
                    <input className="delete" type="button" value="delete" />
                </div>
            </div>
        </>
    );
}

export default IncomeCard;
