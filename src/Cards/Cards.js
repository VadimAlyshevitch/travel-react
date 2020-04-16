import React, {Component} from 'react'
import Card from './Card/Card'
import  './Cars.scss'

export default class Cards extends Component {
  state = {
    cars: [
      {pic : 'https://images.wallpaperscraft.ru/image/nochnoj_gorod_ulitsa_doroga_124106_1280x720.jpg,name: ',name: 'Дешевый', country: 'RUS', desk: 'dsadsad', totalPrice : 1234},
      {pic : 'https://images.wallpaperscraft.ru/image/nochnoj_gorod_ulitsa_doroga_158135_1280x720.jpg',name: 'Бюджетный', country: 'USA', desk: 'dsadsad', totalPrice : 1234},
      {pic : 'https://images.wallpaperscraft.ru/image/nochnoj_gorod_ulitsa_avtomobil_113387_1280x720.jpg',name: 'VIP', country: 'UK', desk: 'dsadsad', totalPrice : 1234}
    ],

    showShablon : false
  }
  goToHome = () => {
    this.props.history.push({
      pathname : '/'
    })
  }

  showShablonPage = () => {
   
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <button onClick={this.goToHome} className={'btn-home'}>Go to home</button>
        <button onClick={() => { 
          this.setState({
            showShablon : true
          })  
          
          console.log(this.state)

          {this.state.cars.map((car, index) => {
            return (
              this.state.cars.showShablon ? 
              <Card
                key={index}
                pic={car.pic}
                name={car.name}
                country={car.country}
                desk={car.desk}
                totalPrice={car.totalPrice}
              /> : null
            )
          })}

        }} className={'btn'}>Показать шаблон</button>

      
      </div>
    )
  }
}