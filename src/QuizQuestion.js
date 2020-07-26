import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'


class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.handleClick.bind(this);
    }
    handleClick(buttonText) {
      if (buttonText === this.props.quiz_question.answer)
      {
        console.log('QuizQuestion - correcto: respuesta ' + buttonText + ' ' + this.props.quiz_question.answer );
        this.props.showNextQuestionHandler();
      }
      else{
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
      </main>
      )
    }
  }

export default QuizQuestion
