import React from 'react';
import { Component } from 'react';
import IncomeForm from '../PopupFroms/IncomeForm';


class Button extends Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <>
                <button onClick={this.togglePopup.bind(this)} className="Add-Butt">+</button>

                {this.state.showPopup ?
                    <IncomeForm
                        text='this is supposed to be a form'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </>
        );
    }
}

export default Button;
