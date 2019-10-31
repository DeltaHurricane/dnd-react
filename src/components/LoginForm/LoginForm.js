import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import apiServices from '../../services/ApiServices';
import './LoginForm.scss';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextpage = this.nextpage.bind(this);
    this.state = { username: null, password: null };
  }


  handleSubmit() {
    const token = apiServices.getLoginToken(this.state);
    token
      .then((tokenValue) => (tokenValue === 'ok' ? this.nextpage() : console.log('fail')));
  }

  nextpage() {
    this.setState({ }, () => {
      this.props.history.push('/');
    });
  }

  handleUsername(event) {
    const username = event.target.value;
    this.setState({ username });
  }

  handlePassword(event) {
    const password = event.target.value;
    this.setState({ password });
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
