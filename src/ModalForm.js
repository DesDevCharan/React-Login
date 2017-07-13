
import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, Checkbox, Col, ControlLabel, FormControl } from 'react-bootstrap';


export class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.data.show,
            value: {
                email: 'abc@x.com',
                password: '',
                cnfPwd: '',
                remember: 'on'
            }
        };
    }
    render() {
        let close = () => this.setState({ show: false });
        let signIn = () => {
            console.log(this.state.value)
        }
        let handleChange = (event) => {
            let tempState = this.state;
            tempState.value[event.target.name] = event.target.value;
            this.setState(tempState);
        }
        return (<Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{this.state.title}</Modal.Title>
            </Modal.Header>

            <Form horizontal>
                <Modal.Body>
                    <FormGroup controlId="formHorizontalEmail"  >
                        <Col componentClass={ControlLabel} sm={4}>
                            Email
                </Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" onChange={handleChange} value={this.state.value.email} name="email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={4}>
                            Password
                </Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" onChange={handleChange} value={this.state.value.password} name="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup className={this.state.exist ? 'classCnfPwd' : ''} controlId="formHorizontalConfirmPassword" >
                        <Col componentClass={ControlLabel} sm={4}>
                            Confirm Password
                </Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" onChange={handleChange} value={this.state.value.cnfPwd} name="cnfPwd" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={12}>
                            <Checkbox onChange={handleChange} checked={this.state.value.remember} name="remember">Remember me</Checkbox>
                        </Col>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={signIn}>
                                {this.state.exist ? 'Sign in' : 'Create'}
                            </Button>
                            <Button onClick={close}>
                                Close
                </Button>
                        </Col>
                    </FormGroup>
                </Modal.Footer>
            </Form>
        </Modal>)
    }
}