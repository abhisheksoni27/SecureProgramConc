import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview">
        <Jumbotron>
          {/* <h1>Welcome!</h1> The rapid pace of innovation in computer science means that practitioners are needed who are able to write safe computer code, design systems in new ways to respond to new security needs, and respond to new threats. This requires that practitioners have a clear understanding of the foundational concepts in secure programming to serve as a basis for building new knowledge and responding to new challenges. The Secure Programming Concept Inventory is designed to measure an individual's understanding of secure programming concepts.
          <br /> */}
          <h2>What is a Concept Inventory?</h2>
          A concept inventory is an assessment tool designed to measure an individual's understanding of concepts in a specific knowledge domain. Concept inventories have two advantages over most standard tests: they are easy to administer and score, and they probe beyond recognition or memorization to examine a student's understanding of a concept
          <br /><br /><br />
          <h2>How did we create the Secure Programming Concept Inventory?</h2>
          The inventory was based on the foundational, knowledge critical concepts in the domain of secure programming. These are described in the <a href='#/dashboard/ConceptMap'>Concept Map</a>. Hard topics and common misconceptions held by students were identified using interviews with students and instructors. A pool of items that specifically target difficult concepts and misconceptions was developed. The pool of items was tested and refined to develop a validated secure programming concept inventory.
          <br /><br /><br />
          <a className="btn btn-primary btn-lg btn-outline btn-rounded" href='#/dashboard/ConceptMap'>Concept Map</a>
        </Jumbotron>
      </div>


    );
  }

});

export default Blank;
