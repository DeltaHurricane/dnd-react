import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.scss';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: null, password: null };
  }


  handleSubmit() {
    console.log(this);
  }

  handleUsername(event) {
    const username = event.target.value;
    this.setState({ username }, () => console.log(username));
  }

  handlePassword(event) {
    const password = event.target.value;
    this.setState({ password }, () => console.log(this.state));
  }

  render() {
    return (
      <form className="login__form">
        <Input type="text" placeholder="Username" onChange={this.handleUsername} />
        <Input type="password" placeholder="Password" onChange={this.handlePassword} />
        <Button name="Login" onClick={this.handleSubmit} />
      </form>
    );
  }
}
