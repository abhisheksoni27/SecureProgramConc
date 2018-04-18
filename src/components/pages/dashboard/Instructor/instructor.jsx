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
              <Link to="/dashboard/Survey_practice">Practice Questions</Link>
            </li>
            <li>
              <Link to="/dashboard/Survey">Take a survey</Link>
            </li>
          </ul>
        </div>

        {/* <BootstrapTable data={ this.products }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable> */}

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Concept</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Memory Leak</td>
              <td>73%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Input Validation</td>
              <td>64%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bad Code</td>
              <td>41%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Programming Development Evvironment</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>SWA Tools</td>
              <td>32%</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>std id</th>
              <th>Name</th>
              <th>class id</th>
              <th>score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Macneil</td>
              <td>2</td>
              <th>58</th>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark Lee</td>
              <td>3</td>
              <th>67</th>
            </tr>
            <tr>
              <td>3</td>
              <td>Sophia Gupta</td>
              <td>1</td>
              <th>88</th>
            </tr>
            <tr>
              <td>4</td>
              <td>Jack Dawson</td>
              <td>2</td>
              <th>43</th>
            </tr>
            <tr>
              <td>5</td>
              <td>Dawn Ming</td>
              <td>4</td>
              <th>55</th>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Pre Score</th>
              <th>Post Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>54%</td>
              <td>79%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>39%</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>77%</td>
              <td>84%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>51%</td>
              <td>66%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>65%</td>
              <td>49%</td>
            </tr>
          </tbody>
        </Table>

      </div>
    );
  }
};

// export default App;
