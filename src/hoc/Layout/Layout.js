import React, {Component} from 'react'
import classes from '../Layout/Layout.module.css'
// import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
// import Drawer from '../../components/Navigation/Drawer/Drawer'
import Menu from '../../components/Menu/Menu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"




class Layout extends Component {

  // state = {
  //   menu : false
  // }

  // toggleMenuHandler = () => {
  //   this.setState({
  //     menu : !this.state.menu
  //   })
  // }
  
  render() {
    return (
      <div className={classes['Layout']}>
        <Menu />
        
       

        {/* <Drawer/>
        <MenuToggle 
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        /> */}
  
      </div>
    )
  }
}

export default Layout 