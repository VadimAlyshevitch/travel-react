import React, {Component} from 'react'
import classes from '../CreateTour/CreateTour.module.css'
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"


export default class MainPage extends Component {
    renderQuizes() {
        return this.state.tours.map(quiz => {
          return (
            <li
              key={quiz.id}
            >
               <Router>
               <Link to={'/tours/' + quiz.id}>
                Тест {quiz.name}
              </Link>
                </Router> 
         
            </li>
          )
        })
      }

    state = {
        tours : []
    }




    
    async componentDidMount() {
    try {
        const response = await Axios.get('https://react-travel-86f0b.firebaseio.com/tour/tours.json')
        console.log(response.data)

        const tours = []

        Object.keys(response.data).forEach((key, index) =>{
            tours.push({
                id : key,
                name : `Название №${index + 1}` 
            })
        })
        this.setState({
            tours
        })
    } catch(e) {
        console.log(e)
    }
    }
    render(){
        return(
            <div className={classes.QuizList}>
            <div>
              <h1>Список </h1>
    
              <ul>
                { this.renderQuizes() }
              </ul>
            </div>
          </div>
        )
    }
}