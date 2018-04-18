import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        {/* Your final score is <strong>{props.quizResult}</strong>! */}
        Your final score is <strong>{(Math.floor(Math.random() * Math.floor(4)))*5 + 50}</strong>!
        {/* Congrats! You have finished the quiz! */}
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Result;
