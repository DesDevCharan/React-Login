import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginForm } from './LoginForm';
function FormattedDate(props) {
  return (<h2>The Time now :::  {props.date.toLocaleString()}.
    <code>VERY PRECIOUS....</code>
  </h2>);
}

function loginClick() {
  this.setState({ show: true });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { date: this.calculateTime() };
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
      date: this.calculateTime()
    });
  }
  calculateTime() {
    let countDownDate = new Date("Jul 13, 2017 14:36:25").getTime();
    let now = new Date().getTime();
    let distance = now - countDownDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <FormattedDate  date={this.state.date} />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
