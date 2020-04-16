import React from 'react'
import './Car.scss'
import {withRouter} from 'react-router-dom'


const Card = props => {
  return (
    <div className={'Car'}
      onClick={()=>{
        props.history.push('/cars/' + props.name.toLowerCase() + '/')
      }}
    >
      <h3>Шаблон: {props.name}</h3>
      <p>Страна : <strong>{props.country}</strong></p>
      <p>pic {props.pic}</p>
      <p>Описание: <strong>{props.desk}</strong></p>
      <p>ИТОГО: <strong>{props.totalPrice} руб</strong></p>
    
    </div>
  )
}

export default withRouter(Card) 