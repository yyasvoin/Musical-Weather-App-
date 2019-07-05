import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';

const API_KEY = "AIzaSyBc3yXn2btOPZQ6GjyFbgfW8w9lDCZ1vMg";


export default class Weatherform extends Component{
    constructor(props) {
        super(props)
        this.getWeather = this.getWeather.bind(this);
        this.state = {
          place: null
          };
      }
    

      getWeather(){

        if (this.state.place !== null && this.state.place.coordinates !== ''){
            
        const geoloc = this.state.place.coordinates.lat + ',' + this.state.place.coordinates.lng;
        this.props.weatherFetch(geoloc);}


        else{
            alert('Please enter a valid location')
        }
      }

render(){

  

    return(
        <div className ="jumbotron jumbotron-fluid hero">
        <div className="container hero-text">
        <div className="col-12">
            <h1 className="display-4">Musical Weather App</h1>
            <p>The perfect song for the weather outside.</p>
        </div>
        </div> 
        <div className="container">
        <div className="col-12">
           <GoogleComponent
            apiKey={API_KEY}
            language={'en'}
            country={'country:ca|country:us'}
            coordinates={true}
            onChange={(e) => { this.setState({ place: e }) }} />
        </div>
        
        <div className="button">
        <div className="col-12">
        <button onClick={this.getWeather} type="button" className="btn btn-outline-primary">Get the Weather</button>
        </div>
        </div>
        </div>
        </div>

    )
}
}

 