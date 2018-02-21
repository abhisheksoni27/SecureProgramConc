import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Buttons = React.createClass({
  render: function() {
    return (

      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Reports <small>Feedback Survey</small></h2> 

          <i className="glyphicon glyphicon-dashboard bg-fade"></i>
          <Jumbotron> 
            <h1>Add Comments here</h1> 
            <p>You can give us your suggestions and feedback</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> 
          </Jumbotron> 
        </div>
      </div>
      
    );
  }

});

export default Buttons;