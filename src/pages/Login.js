import React from 'react';

class Login extends React.Component {
  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="alguem@alguem.com"
              data-testid="email-input"
              onChange={ this.hadleChange }
              value={ email }
            />
          </label>
          password:
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="6 ou mais caracteres"
              data-testid="password-input"
              onChange={ this.hadleChange }
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
