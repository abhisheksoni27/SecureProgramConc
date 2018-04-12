import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import { connect } from 'react-redux';
import firebase from 'firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";
import classNames from "classnames";

import { setFirebase } from '../../../a_action/package_action'

var HomePage = React.createClass({

  componentWillMount: function() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAoUVUEow1jcHdD-D2pIk1OY6VR968e9ys",
        authDomain: "prgrammingconcinvent.firebaseapp.com",
        databaseURL: "https://prgrammingconcinvent.firebaseio.com",
        projectId: "prgrammingconcinvent",
        storageBucket: "prgrammingconcinvent.appspot.com",
        messagingSenderId: "907853735039"
      });
    }

    this.props.setFirebase(firebase)
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){

    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    console.log(this.props.app.firebase);

    // var name = this.context.router.getCurrentPath();

    const { pathname } = this.props.location;

    var title = <span><a href="http://startreact.com/" title="Start React" rel="home"><img src="http://startreact.com/wp-content/themes/dazzling-child/images/logo.png" alt="Start React" title="Start React" height="35px" />&nbsp;SB Admin React - StartReact.com</a></span>;

    return (
        <div className="dashboard-page ui-view">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-2 sidebar">
                <div className="text-center">
                  <h2 className="brand"> Home <br /><small></small></h2>
                  <img src={require("../../../common/images/flat-avatar.png")} className="user-avatar" />
                  <br />
                  <Link to="/login" className="btn btn-white btn-outline btn-rounded btn-sm">Logout</Link>
                </div>

                <ul className="nav nav-sidebar">
                  <li>
                    <Link to="/dashboard/overview">Overview</Link>
                  </li>
                  <li>
                    <a href="#/dashboard/Aboutus">About Us</a>
                  </li>
                  <li>
                    <Link to="/dashboard/ConceptMap">Concept Map</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/ChooseSurvey">Secure Programming Inventory</Link>
                  </li>
                  <li>
                    <a href="#/dashboard/reports">User Feedback</a>
                  </li>
                </ul>
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>


            </div>
          </div>
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }

});

const mapDispatchToProps = dispatch => {
  return {
    setFirebase: firebase => dispatch(setFirebase(firebase)),
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
