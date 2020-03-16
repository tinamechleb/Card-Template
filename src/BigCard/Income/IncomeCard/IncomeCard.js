import React from 'react';
import Delete from '../../../images/delete.png';
import Edit from '../../../images/pencil.png';
import './IncomeCard.css';

function IncomeCard() {
    return (
        <>
            <div className="Income-Grid">
                <div className="Income-Card">

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
