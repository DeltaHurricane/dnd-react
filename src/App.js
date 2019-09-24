import React from 'react';
import './styles/App.scss';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}

export default App;


function LoginPage() {
  return (
    <div className="login__block">
      <header className="block__header">DnD</header>
      <article>
        <LoginForm />
      </article>
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <Input type="text" placeholder="Username" />
      <br />
      <Input type="password" placeholder="Password" />
      <button
        className="button button--flash button--confirmation"
        type="button"
      >
        {'Login'}
      </button>
    </form>
  );
}


function Input({ type, placeholder }) {
  return (
    <input
      className="input input--pulse"
      type={type}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

/*  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
