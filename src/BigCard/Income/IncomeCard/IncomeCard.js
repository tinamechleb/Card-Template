import React, { Component } from "react";
import './IncomeCard.css';


class IncomeCard extends Component {


    render() {

        return (
            <div className="Income-Grid">
                <div className="Income-Card">
                    <p className="Income-Title">Title</p>
                    <p className="Income-amount">800$</p>
                </div>
                {/* <div className="Buttons">
                    <input className="edit" type="button" value="edit" />
                    <input className="delete" type="button" value="delete" />

                </div> */}
            </div>

        );
    }
}

export default IncomeCard;
