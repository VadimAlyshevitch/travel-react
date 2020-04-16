import React, {Component} from 'react'
import {} from 'react-router-dom'



class MainContent extends React.Component {



    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.wallpaperscraft.ru/image/gory_doroga_puteshestvie_133611_1920x1080.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.wallpaperscraft.ru/image/gory_gorizont_nebo_vodnaya_glad_solnechnyy_svet_linii_22635_1920x1080.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.wallpaperscraft.ru/image/gory_nebo_gorizont_zakat_117942_1920x1080.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
          </div>
        )
    }
}


export default MainContent