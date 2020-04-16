import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cards from './Cards/Cards'
import {Route, NavLink, Switch} from 'react-router-dom'
import TravelDetail from './TravelDetail/TravelDetail'
import MainContent from './MainContent/MainContent'
import Form from './Form/Form'



class App extends Component {
  state = {
    isLogin : false
  }
  render() {

  

    return (
      <div>
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName={'my-active-class-name'}>Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/about">О нас</NavLink>
            </li>
            <li className="nav-item">  
              <NavLink  className="nav-link" to="/cars">Спланировать путешествие</NavLink>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <NavLink to="/form" className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.setState({
          isLogin : true
          })}>Авторизация</NavLink>
          </form>
          </div>
     






        </nav>

        <h4>Login state {this.state.isLogin ? 'TRUE' : 'FALSE'}</h4>
        


        {/*localhost:3000/ */}
     
        <hr/>
   

      <Switch>   
        <Route  path="/" exact component={MainContent}/>
        {
          this.state.isLogin ?   <Route path="/about"  exact component={About}/> : null
        }   
     
        <Route path="/cars"  component={Cards}/>
        <Route path="/cars:name"  component={TravelDetail}/>
        <Route path="/form" component={Form} />
        {/* <Route  render={()=> <h1>404 Page not found</h1>}/> */}
     </Switch>

        

        
      </div>
    );
  }
}

export default App
