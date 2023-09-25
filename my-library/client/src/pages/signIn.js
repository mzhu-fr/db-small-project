import React, { Component } from 'react';
import '../styles/sign.css';

class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'root comme user et mdp',
      password: '',
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === 'root' && this.state.password === 'root') {
      console.log('Connecté avec succès');
    } else {
      this.setState({ error: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (

        <div className="pageSignIn">
          <div className="container">
        <h2>Connexion</h2>
        <form onSubmit={this.handleSubmit} id="login-form">
          <label>
            Nom d'utilisateur:
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Se Connecter</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
</div>
    );
  }
}

export default signIn;