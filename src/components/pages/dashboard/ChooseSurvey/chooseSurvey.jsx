import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

//For survey part
import update from 'react-addons-update';
import quizQuestions from './multipleChoice/api/quizQuestions';
import Quiz from './multipleChoice/components/Quiz';
import Result from './multipleChoice/components/Result';
import logo from './multipleChoice/svg/logo.svg';
import './multipleChoice/App.css';
import './multipleChoice/index.css';

export default class App extends Component {
  render() {
    return (
      <div key="choose" className="reports-page">
        <div className="ng-scope">
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded button-margin-specify">Back to Overview</Link>
          {/* <i className="glyphicon glyphicon-dashboard bg-fade"></i> */}
          <Jumbotron>
            <center>
              <h2>Inventory type</h2>
              <br />
              <p>You can either take a practice test or complete the Inventory.</p>
              {/* <br /> */}
              <div class="container">
                <form action="action_page.php">
                  {/* <label for="fname">First Name</label>
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
                  <textarea id="subject" name="subject" placeholder="Write something.." height="200"></textarea> */}

                  {/* <input type="submit_choosesurvey" value="Practice" onclick="window.location='http://www.google.com'"></input>
                  <input type="submit_choosesurvey" value="Quiz"></input> */}
                </form>
              </div>

              <div className="center-align-instructor">
                <Link to="/dashboard/Survey_practice" className="center-align-instructor-element btn-lg btn-primary btn-outline btn-rounded">Take the Practice Test</Link>
                <Link to="/dashboard/Survey" className="center-align-instructor-element btn-lg btn-primary btn-outline btn-rounded">Take the Inventory</Link>
                <Link to="/dashboard/Instructor" className="center-align-instructor-element btn-lg btn-primary btn-outline btn-rounded">Instructor Login</Link>
              </div>
            </center>
          </Jumbotron>
        </div>
      </div>
    );
  }

};
