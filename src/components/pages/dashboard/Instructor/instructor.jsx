import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar, BootstrapTable, TableHeaderColumn, Table} from "react-bootstrap";

//For survey part
import update from 'react-addons-update';
import quizQuestions from './multipleChoice/api/quizQuestions';
import Quiz from './multipleChoice/components/Quiz';
import Result from './multipleChoice/components/Result';
import logo from './multipleChoice/svg/logo.svg';
import './multipleChoice/App.css';
import './multipleChoice/index.css';

export default class App extends Component {

  //Survey Logic
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      result: ''
    };

    this.products = {
      id: 1,
      name: 'John',
      price: 90
    }

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    // console.log(this.props.location.pathname);
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Instructor Dashboard</h2>
        </div>

        <div className="SubNavBar-title">
          <ul className="SubNavBar-module">
            <li>
              <Link to="/dashboard/Instructor">Summary</Link>
            </li>
            <li>
              <Link to="/dashboard/Instructor/createSurvey">Create a survey</Link>
            </li>
            <li>
              <Link to="/dashboard/Survey_practice">View Practice Questions</Link>
            </li>
            <li>
              <Link to="/dashboard/Survey">Take the Inventory</Link>
            </li>
          </ul>
        </div>

        {/* <BootstrapTable data={ this.products }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable> */}

        <div className = "separate"><big><b>Results by class:</b><br /></big></div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Concept</th>
              <th>Score</th>
              <th>Suggested Resources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Memory Leak</td>
              <td>73%</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Input Validation</td>
              <td>64%</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bad Code</td>
              <td>41%</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Programming Development Environment</td>
              <td>75%</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>SWA Tools</td>
              <td>32%</td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Question ID</th>
              <th>Average Pre Score</th>
              <th>Average Post Score</th>
              <th>Most common misconception 1</th>
              <th>Most common misconception 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>54%</td>
              <td>79%</td>
              <td>Keeping privileges constant without isolation</td>
              <td>Elevating privileges unnecessarily</td>
            </tr>
            <tr>
              <td>2</td>
              <td>39%</td>
              <td>60%</td>
              <td>Misunderstanding parameter type</td>
              <td>Failing to check parameter type</td>
            </tr>
            <tr>
              <td>3</td>
              <td>77%</td>
              <td>84%</td>
              <td>Ignoring missing data</td>
              <td>Leaving missing data randomly scattered</td>
            </tr>
            <tr>
              <td>4</td>
              <td>51%</td>
              <td>66%</td>
              <td>Failing to overwrite password with random data immediately after use</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>65%</td>
              <td>49%</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <br />
        <div className = "separate"><big><b>Results by student:</b></big></div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Class ID</th>
              <th>Score</th>
              <th>Pre Test Score</th>
              <th>Post Test Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>Sophia Gupta</td>
              <td>1</td>
              <td></td>
              <td>60</td>
              <td>65</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Dawn Ming</td>
              <td>1</td>
              <td></td>
              <td>55</td>
              <td>76</td>
            </tr>
            <tr>
              <td>201</td>
              <td>John Macneil</td>
              <td>2</td>
              <td>58</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>202</td>
              <td>Jack Dawson</td>
              <td>2</td>
              <td>43</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>303</td>
              <td>Mark Lee</td>
              <td>3</td>
              <td></td>
              <td>80</td>
              <td>75</td>
            </tr>
          </tbody>
        </Table>



      </div>
    );
  }
};

// export default App;
