import React from 'react'
import classes from '../FinishedQuiz/FinishedQuiz.module.css'
import Button from '../UI/Button/Button'


const FinishedQuiz = props =>{
    const successCount = Object.keys(props.results).reduce((total, key)=>{
        if (props.results[key] === 'success'){
            total ++
        } 
            return total
        
    }, 0)
    return (
        <div className={classes.FinishedQuiz}> 
            <ul>
                {
                    props.quiz.map((quizItem, index)=>{
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'errore' ? 'fa-times' : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]
                        return(
                            <li key={index}>
                                <strong>
                                    {index + 1}
                                </strong>. 
                                {quizItem.question} 
                                <i className={cls.join(' ')}
                                />

                            </li>
                        )
                    })
                }
            </ul>
            <p>
            {successCount} verno iz {props.quiz.length}
            </p>
            {/* <button onClick={props.onRetry}> 
                Povtor
            </button> */}
            <Button onClick={props.onRetry} type="primary">
                Повторить
            </Button>
            <Button  type="success">
                Перейти в список
            </Button>
        </div>
    )
}


export default FinishedQuiz