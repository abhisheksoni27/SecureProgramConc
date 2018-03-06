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

          {/* <i className="glyphicon glyphicon-dashboard bg-fade"></i> */}
          <Jumbotron>
            <h2>Add Comments here</h2>
            <p>You can give us your suggestions and feedback</p>
            <div class="container">
              <form action="action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                  <label for="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                  <label for="country">Feedback Category</label>
                  <select id="default" name="Feedback Category">
                    <option value="Suggestions">Suggestions</option>
                    <option value="Questions">Questions</option>
                    <option value="Error Report">Error Report</option>
                  </select>

                  <label for="subject">Details</label>
                  <textarea id="subject" name="subject" placeholder="Write something.." height="200"></textarea>

                  <input type="submit" value="Submit"></input>
              </form>
            </div>
            {/* <p> <a href="#/dashboard/Reports" className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> */}

          </Jumbotron>
        </div>
      </div>

    );
  }

});

export default Buttons;
