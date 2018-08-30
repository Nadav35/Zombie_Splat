import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/game"));
  }

  render() {
    const nameInput = this.props.formType === 'Login' ? 
      "" : <div className="name-div">
        <label htmlFor="name-input">Name</label>
        <input
          className="name-input"
          value={this.state.name}
          placeholder="Enter your name"
          onChange={this.update('name')}
          type="text" />
        {/* <i className="fas fa-user"></i> */}
      </div>;
    return (
      <div className="welcome-page">
        <h1>Welcome to Zombiesplat</h1>
        
        <div className="session-container">
          <div className="session-form">
            <form className="form"
              onSubmit={this.handleSubmit}>
              <h2>{this.props.formType}</h2>

              {nameInput}
              
              <div className="email-div">
                <label htmlFor="email-input">Email</label>
                <input 
                className="email-input"
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.update('email')}
                type="text"/>
                {/* <i className="fas fa-envelope-square"></i> */}
              </div>
              
              <div className="password-div">
                <label htmlFor="password-input">Password</label>
                <input 
                className="password-input"
                value={this.state.password}
                placeholder="Enter your password"
                onChange={this.update('password')}
                type="password"/>
                {/* <i className="fas fa-unlock"></i> */}
              </div>
              
              <div className="form-submit">
                <button className="submit-button">
                  {this.props.formType}
                </button>
              
              </div>

              <div className="form-footer">
                
                <aside>or</aside>{this.props.navLink} 
                
              
              </div>

            </form>
          </div>
          <div className="zombie">
            <img src="./zombie.gif" />
          </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(SessionForm);