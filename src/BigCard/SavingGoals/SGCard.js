import React from 'react';
import './SavingGoals.css';

function SGCard() {
    return (
        <>
            <div className="SG-Grid">
                <div className="SG-Card">
                    <p className="SG-Title">Title</p>
                    <div>
                        <p className="SG-wORm">weekly</p>
                        <p>-</p>
                        <p className="SG-DueDate">dd/mm/yy</p>
                    </div>
                    <div>
                        <p className="SG-saved">200$</p>
                        <p>/</p>
                        <p className="SG-total">800$</p>
                    </div>
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

export default SGCard;
