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
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount () {
    this.props.setHealth(10);
    this.props.fetchUsers();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then((data) => {
      if (data.type === "RECEIVE_CURRENT_USER") {
        this.props.history.push("/game");
      }
    });
  }

  loginDemoUser(e) {
    
    e.preventDefault();
    this.props.loginDemoUser().then((data) => {
      this.props.history.push("/game");
    })
   
  }

  getErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="session-errors">
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return "";
    }
  }

  getHighScore() {
    if (this.props.users) {
      return (
        <ul className="high-scores-list">
          {this.props.users.users.slice(0,3).map((user, idx) => (
            <li key={idx}>
              <span>{user.name}</span>
              <span>{user.highScore}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      return "";
    }
  }

  toggleModal (e) {
    const modal = document.querySelector("#modal");
    modal.classList.toggle("is-open");
    // e.currentTarget.classList.toggle("is-open");
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
        <i onClick={(e) => this.toggleModal(e)} id="info-modal-toggle" className="fas fa-info fa-5x info-modal-icon"></i>
        {/* <div className="title-container">
          <h1>Welcome to Zombiesplat</h1>
          <h3>IN 3D!!!</h3>
          </div>
          <h3>IN 3D!!!</h3> */}
        
        <div className="session-container">
          <div className="high-scores">
            <h1>High Scores</h1>
            {this.getHighScore()}
          </div>      
          {/* <h3>IN 3D!!!</h3> */}
          <div className="session-form">
            <form className="form">
              <h2>{this.props.formType}</h2>
              {this.getErrors()}

              {nameInput}
              
              <div className="email-div">
                <label htmlFor="email-input">Email</label>
                <input 
                className="email-input"
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.update('email')}
                type="text"/>
              </div>
              
              <div className="password-div">
                <label htmlFor="password-input">Password</label>
                <input 
                className="password-input"
                value={this.state.password}
                placeholder="Enter your password"
                onChange={this.update('password')}
                type="password"/>
              </div>
              
              <div className="buttons">
                <button onClick={this.handleSubmit}
                className="submit-button">
                  {this.props.formType}
                </button>

                <button onClick={this.loginDemoUser}
                className="demo-button">
                  Demo User
                </button>
              </div>
              <div className="form-footer">
                <aside>or</aside>{this.props.navLink}                 
              </div>
            </form>
          </div>
        </div>
        <div id="modal" className="modal">
          <div className="modal-info">
            <h1>Welcome to Zombie Splat!</h1>
            <p>
              This is an immersive virtual reality first person zombie shooter!
              The goal is to knock down all the zombies before the timer hits 0, 
              or you run out of health. <br /><br /> 
              
              <strong>Game Play Instructions:</strong><br/>
              To look around, click and drag your mouse around the screen.
              Press Spacebar to shoot. You may press <strong>R</strong> at any point during the game to restart.
              Be warned, the clock starts ticking as soon as you login.
              Good Luck, and have fun!

            </p>
          </div>
          <div onClick={(e) => this.toggleModal(e)} id="modal-screen" className=" js-modal-close modal-screen"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);