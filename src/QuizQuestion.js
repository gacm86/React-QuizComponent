import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'


class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        console.log("QuizQuestion" + this.props.quiz_question.instruction_text);
        this.clickHandler = this.handleClick.bind(this);
        this.state = {incorrectAnswer : false};
    }
    handleClick(buttonText) {
      if (buttonText === this.props.quiz_question.answer)
      {
        this.setState({incorrectAnswer : false});
        this.props.showNextQuestionHandler();
      }
      else{
        this.setState({incorrectAnswer : true});
        console.log('QuizQuestion - incorrecto: respuesta ' + buttonText + ' ' + this.props.quiz_question.answer );
      }
      
    }
    render() {
      return (
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
              {this.props.quiz_question.answer_options.map((answer_option, index) => {
                  return<QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)}/>
              })}
              {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} key={5} clickHandler={this.handleClick}/> */}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
                <p className='error'>Sorry, that's not right</p>
              ): null}
      </main>
      )
    }
  }

export default QuizQuestion
