import React from 'react';
import './Form.css';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFormInline,
    MDBAnimation
} from "mdbreact";


class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <MDBCard id="classic-card">
                        <MDBCardBody className="white-text">
                            <h3 className="text-center">
                                Add an Income
                            </h3>
                            <hr className="hr-light" />
                            <MDBInput
                                className="white-text"
                                iconClass="white-text"
                                label="Title"
                            />
                            <MDBInput
                                className="white-text"
                                iconClass="white-text"
                                label="Description"
                            />
                            <div className="text-center mt-4 black-text">
                                <MDBBtn color="indigo">Done</MDBBtn>
                                <hr className="hr-light" />

                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <button onClick={this.props.closePopup} className="Cancel-Button">x</button>
                </div>
            </div>
        );
    }
}

export default Popup;
