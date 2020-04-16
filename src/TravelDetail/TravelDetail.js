import React, {Component} from 'react'
import {} from 'react-router-dom'

 class TravelDetail extends React.Component {
    render(){
        return(
            <h1>{this.props.match.params.name}</h1>
        )
    }
}


export default TravelDetail