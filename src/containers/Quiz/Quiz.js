import React, {Component} from 'react'
import classes from '../Quiz/Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'


class Quiz extends Component {
  state = {
    results : {},
    isFinished : false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Правильный 1',
        rightAnswerId: 1,
        id: 1,
        answers: [
          {text: 'один', id: 1},
          {text: 'два', id: 2},
          {text: 'три', id: 3},
          {text: 'четыре', id: 4}
        ]
      },
      {
        question: 'Правильный 2',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'один', id: 1},
          {text: 'два', id: 2},
          {text: 'три', id: 3},
          {text: 'четыре', id: 4}
        ]
      },
      {
        question: 'Правильный 3',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'один', id: 1},
          {text: 'два', id: 2},
          {text: 'три', id: 3},
          {text: 'четыре', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {

    if(this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'sucsess'){
        return
      }
    }
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if(!results[answerId] ){
        results[answerId] = 'success'
        
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished : true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)


    } else {
      results[answerId] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }
  onRetryHandler=()=>{
    this.setState({
      activeQuestion : 0,
      answerState : null,
      isFinished : false,
      results : {}
    })
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
            {
              this.state.isFinished 
              ? <FinishedQuiz 
              results = {this.state.results}
              quiz = {this.state.quiz}
              onRetry={this.onRetryHandler}


                />
              :
              <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />


            } 
        
        </div>
      </div>
    )
  }
}


export default Quiz