import React from 'react';
import Router from 'react-router';
import { Link } from "react-router";
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from './dashboard/Survey/multipleChoice/svg/logo.svg';
import './dashboard/ChooseSurvey/multipleChoice/App.css';
import './loginPageLayout.css'
import $ from "jQuery";

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){

    return(
        <div className="login-page ng-scope ui-view">
          {/* <div className="row"> */}
            {/* <div className="col-md-5 col-lg-5 col-md-offset-4 col-lg-offset-4">
              {/* <img src={require("../../common/images/flat-avatar.png")} className="user-avatar" /> */}
            <div className="center-align-login">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Secure Programming Concept Inventory</h1>
              <br />
              <h4>A test to determine your understanding of secure programming</h4>
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid">
                {/* <div className="form-content">
                  <div className="form-group">
                    <input type="text" className="form-control input-underline input-lg" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control input-underline input-lg" placeholder="Password" />
                  </div>
                </div> */}
                <br /><br /><br />
                <div className="center-align-instructor">
                  {/* <button type="submit" className="center-align-instructor-element btn btn-white btn-outline btn-lg btn-rounded">About the test</button> */}
                  <Link to="/dashboard/Overview" className="center-align-instructor-element btn btn-white btn-outline btn-lg btn-rounded">About the test</Link>
                  <Link to="/dashboard/ChooseSurvey" className="center-align-instructor-element btn btn-white btn-outline btn-lg btn-rounded">Take the test</Link>
                </div>

              </form>
            </div>
          {/* </div> */}
        </div>

    );


  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');

    // this.transitionTo('dashboard');

    return false;

  }

});

export default LoginPage;
