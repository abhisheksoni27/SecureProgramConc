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
            <p>Details about our research team and connections</p>
            <h4>Administrative Institutions:</h4><br />
            This project is a collaboration among researchers at Purdue University, California State University Sacramento, University of California Davis, and California Polytechnic State University San Luis Obispo.<br /><br />
            <h4>Project Members:</h4><br />
            Project PI, Dr. Ida Ngambeki.<br />
            Project co-PI Dr. Jun Dai.<br />
            Project co-PI Dr. Matt Bishop.<br />
            Dr. Phillip Nico at California Polytechnic State University San Luis Obispo will be remunerated as a project consultant.<br />

            {/* <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> */}
          </Jumbotron>
        </div>
      </div>

    );
  }

});

export default Aboutus;
