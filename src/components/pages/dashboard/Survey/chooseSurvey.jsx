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
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link>
          <h1>Survey <small>Secure Programming Concept Inventory Survey</small></h1>

          {/* <i className="glyphicon glyphicon-dashboard bg-fade"></i> */}
          <Jumbotron>
            <h2>Questionair type</h2>
            <p>Choose to take either a practice set or take an official quiz.</p>
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

            {/* <p> <a href="#/dashboard/Survey_practice" className="submit_choosesurvey">Submit</a> </p> */}
            <form action="#/dashboard/Survey_practice">
                <input type="submit" value="Go to Practice" />
                <input type="submit" value=" Go to Quiz " />
            </form>
            <form action="#/dashboard/Survey_practice">

            </form>

          </Jumbotron>
        </div>
      </div>
    );
  }

};
