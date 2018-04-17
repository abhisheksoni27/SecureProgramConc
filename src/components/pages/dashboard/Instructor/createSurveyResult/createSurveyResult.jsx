import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar, ButtonToolbar, Button, DropdownButton, NumericInput} from "react-bootstrap";


//For survey part
import update from 'react-addons-update';
import quizQuestions from '../multipleChoice/api/quizQuestions';
import Quiz from '../multipleChoice/components/Quiz';
import Result from '../multipleChoice/components/Result';
import logo from '../multipleChoice/svg/logo.svg';
import '../multipleChoice/App.css';
import '../multipleChoice/index.css';

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

    this.BUTTONS = ['Default'];

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.renderDropdownButton = this.renderDropdownButton.bind(this);
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

  // Drop down menu.
  renderDropdownButton(title, i) {
    return (
      <DropdownButton
        bsStyle={title.toLowerCase()}
        title={title}
        key={i}
        id={`dropdown-basic-${i}`} >
        <MenuItem eventKey="1">Signle Test</MenuItem>
        <MenuItem eventKey="2">Pre & Post Test</MenuItem>
        {/* <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem> */}
      </DropdownButton>
    );
  }


  renderButtonToolbar() {
    return (
      <ButtonToolbar>
        {this.BUTTONS.map(this.renderDropdownButton)}
      </ButtonToolbar>
    )
  }


  renderInputColumn() {
    return (
      <NumericInput/>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Secure Programming Concept Practice Questions</h2>
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

        <Jumbotron>
          <div className="center-align">
            <h2>Questionair Code: </h2>
            <br />
            <h1>CS6739</h1>
            <br/>
            <span>Please send to students.</span>
          </div>
        </Jumbotron>
      </div>
    );
  }
};

// export default App;
