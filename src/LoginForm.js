import React, { Component } from 'react';
import { Button, Modal, ButtonGroup, Form, FormGroup, Checkbox, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { ModalForm } from './ModalForm';

export class LoginForm extends Component {
    modalData = { show: false, title: "Login Here", exist: true };
    constructor(props) {
        super(props);
        console.log(this);
    }
    loginClick() {
        this.modalData = { show: true, title: "Login Here", exist: true };
    }
    signUpClick() {
        this.modalData = { show: true, title: "Sign in with an e-mail", exist: false };
    }
    render() {
        return (
            <div className="modal-container" style={{ height: 400 }}>
                <div className="button-container">
                    <ButtonGroup vertical block>
                        <Button
                            bsStyle="success"
                            bsSize="large"
                            onClick={this.loginClick}
                        >
                            Already a Member? Please Login.
                        </Button>
                        <Button
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.signUpClick}
                        >
                            New Here Please Signup.
                        </Button>
                    </ButtonGroup>
                </div>
                <ModalForm data={this.modalData}/>
            </div>
        );
    }
}