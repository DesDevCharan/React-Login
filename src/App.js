import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal, ButtonGroup, Form, FormGroup, Checkbox, Col, ControlLabel, FormControl } from 'react-bootstrap';

const LoginForm = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false });
    let loginClick = (a) => {
      this.setState({ show: true, title: "Login Here", exist: true });
    };
    let signUpClick = (a) => {
      this.setState({ show: true, title: "Sign in with an e-mail", exist: false });
    };

    return (
      <div className="modal-container" style={{ height: 400 }}>
        <div className="button-container">
          <ButtonGroup vertical block>
            <Button
              bsStyle="success"
              bsSize="large"
              onClick={loginClick}
            >
              Already a Member? Please Login.
        </Button>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={signUpClick}
            >
              New Here Please Signup.
        </Button>
          </ButtonGroup>
        </div>
        <Modal
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
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                  Password
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup className={this.state.exist ? 'classCnfPwd' : ''} controlId="formHorizontalConfirmPassword">
                <Col componentClass={ControlLabel} sm={4}>
                  Confirm Password
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    {this.state.exist ? 'Sign in' : 'Create'}
                  </Button>
                  <Button onClick={close}>
                    Close
                </Button>
                </Col>
              </FormGroup>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
});


function FormattedDate(props) {
  return (<h2>The Time now :::  {props.date.toLocaleTimeString()}.
    <code>VERY PRECIOUS....</code>
  </h2>);
}

function loginClick() {
  this.setState({ show: true });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <FormattedDate date={this.state.date} />
          <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}

export default App;
