import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Aboutus = React.createClass({
  render: function() {
    return (

      <div key="aboutus" className="aboutus-page">
        <div className="ng-scope">
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link>
          <h1>About Us <small>more information</small></h1>

          {/* <i className="glyphicon glyphicon-dashboard bg-fade"></i> */}
          <Jumbotron>
            {/* <h1>About Us</h1> */}
            <span>This project is a collaboration among researchers at Purdue University, California State University Sacramento, University of California Davis, and California Polytechnic State University San Luis Obispo</span>

            <br /><br />
            <b><h4>Project Team</h4></b>
            <b>Dr. Ida Ngambeki</b> is an Assistant Professor in the Department of Computer and Information Technology at Purdue University.
            <br /><br />
            <b>Dr. Matt Bishop</b> is a Professor in the Department of Computer Science at the University of California Davis.
            <br /><br />
            <b>Dr. Jun Dai</b> is an Assistant Professor in the Department of Computer Science at California State University Sacramento.
            <br /><br />
            <b>Dr. Phillip Nico</b> is a Professor in the Department of Computer Science and Software Engineering at California Polytechnic State University in San Luis Obispo.


            {/* <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> */}
          </Jumbotron>
        </div>
      </div>

    );
  }

});

export default Aboutus;
