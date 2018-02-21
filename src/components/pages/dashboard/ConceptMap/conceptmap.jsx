import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-map" key="ConceptMap"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link> 
        <h2>Overview <small>What is secure programming?</small></h2> 
        <Jumbotron> 
          <h1>Welcome!</h1> We help students get a better understanding of secure programming by illustrating interrelations between the concepts.
          <br />
          
          <br /> 
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
        </Jumbotron> 
      </div>
      
      
    );
  }

});

export default Blank;