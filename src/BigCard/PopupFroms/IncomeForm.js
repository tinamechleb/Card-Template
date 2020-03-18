import React from 'react';
import { MDBInput } from 'mdbreact';
import './Form.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <MDBInput type="textarea" label="Material textarea" rows="5" />
                    <button onClick={this.props.closePopup}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default Popup;
