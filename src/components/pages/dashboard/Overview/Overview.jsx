import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview">
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link>
        <h2>Overview <small>What is the Secure Programming Concept Inventory?</small></h2>
        <Jumbotron>
          <h1>Welcome!</h1> The rapid pace of innovation in computer science means that practitioners are needed who are able to write safe computer code, design systems in new ways to respond to new security needs, and respond to new threats. This requires that practitioners have a clear understanding of the foundational concepts in secure programming to serve as a basis for building new knowledge and responding to new challenges. The Secure Programming Concept Inventory is designed to measure an individual's understanding of secure programming concepts.
          <br />

          <br />
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p>
        </Jumbotron>
      </div>


    );
  }

});

export default Blank;
