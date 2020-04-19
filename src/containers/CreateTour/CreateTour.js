import React, {Component} from 'react'
import classes from '../CreateTour/CreateTour.module.css'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../forCreateTouur/forCreateTourFramework'
import Input from '../../components/UI/Input/Input'




function createOptionControl(number) {
    return createControl({
        label : `Вариант ${number}`,
        erroreMessage : 'Ошибка!',
        id : number
    }, 
    {required : true})
}

function createFomControl() {
    return {
        question: createControl({
            label : 'Введите название шаблона',
            erroreMessage : 'Поле не может быть пустым'
        }, {required : true}),

        option1 : createOptionControl(1),
        option2 : createOptionControl(2),
        option3 : createOptionControl(3),
        option4 : createOptionControl(4)
    }
}




export default class CreateTour extends Component {


    state = {
        quiz : [],
        formControls : createFomControl()
    }
    submitHandler = event =>{ event.preventDefault() }
        
    
    // addQuestionHandler = () =>{

    // }
    // createQuizHandler = () => {

    // }
    changeHandler = (value, controlName) => {

    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]



            return (
                <React.Fragment key={controlName + index}> 
                    <Input 
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    erroreMessage={control.erroreMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}

                    
                    />
                    { index === 0 ? <hr /> : null }
                </React.Fragment>
            )
            

        })
    }


    render() {
        return(
            <div className={classes.CreateTour}>
                <div>
                    <h1>Конструктор путешествия</h1>


                    <form onSubmit={this.submitHandler}>
                       
                        
                        {
                            this.renderInputs()
                        }


                        <select>

                        </select>
                        <Button 
                            type="primary"
                            onClick={this.addQuestionHandler }
                        > Добавить</Button>
                         <Button 
                            type="success"
                            onClick={this.createQuizHandler }
                        > Создать маршрут</Button>
                       
                       
                    </form>
                </div>
                
            </div>
        )
    }

}