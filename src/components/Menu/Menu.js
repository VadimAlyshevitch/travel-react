import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

import Quiz from '../../containers/Quiz/Quiz'
import Form from '../../containers/Form/Form'
import CreateTour from '../../containers/CreateTour/CreateTour'




class Menu extends React.Component{


    render(){
        return(
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">REAL MADRID</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                <Link className="nav-link" exact to="/">Главная</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" exact to="/createtour">Создать свой план путешествия</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link"  exact to="/quizes">Готовый план путешествия</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" exact to="/form">Авторизация</Link>
                                </li>
                            </ul>
                        </div>
                </nav>

                <Switch>
          <Route path="/createtour" component={CreateTour}/>
         
          <Route path="/quizes" component={Quiz}/>
          <Route path="/form" component={Form}/>
      
        </Switch>

            </Router>
 
        )
    }
}


export default Menu