import React, { Component } from 'react';
import Script from  'react-load-script';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/Splash';
import App from '../components/App';
import {
  getLocationByIP, getCurrentWeather,
  getForecastWeather, updateWeatherStatus
} from '../actions';


const APKEY = "AIzaSyD5MWT0TdVQ-AGaAbqAOO1KEwdFr8wNhxY";

class AppFrame extends Component {
  constructor(props){
    super(props)

    this.state = {scriptLoaded : false, hasLocation : false}

    this.positionOptions = {maximumAge: 75000, enableHighAccuracy : true, timeout : 5000}

    // this.handleLoadScript = this.handleLoadScript.bind(this)
  }

  componentDidMount() {
    console.log('mount called!')
    this.getGeolocation()
  }

  handleLoadScript = () => {
    this.setState({scriptLoaded : true})
  }

  handleLocationState = () => {
    this.setState({hasLocation : true})
  }

  getIPLocation = () => {
    this.props.getLocationByIP()
  }

  getGeolocation = () => {
    const geolocation = navigator.geolocation;
    if(geolocation) {//browser supports
      console.log('location on!')
      //detect location
      geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError, this.positionOptions)
    }
    else{
      console.log('location off!')
      //use ip based geolocator
      this.getIPLocation()
    }
  }

  handleGeoError = (err) => {
    switch(err.code){
      case err.PERMISSION_DENIED : break
      default : this.getIPLocation()
    }
  }

  handleGeoSuccess = ({ coords }) => {
    //fetch weather data using position coords
    this.props.getCurrentWeather(coords)
  }

  renderAppOrSplash = () => {
    const { currentWeather } = this.props;
    return this.state.scriptLoaded && this.state.hasLocation && this.props.weatherStatus
              ? <App />
              : <Splash />
  }

  render() {
    console.log('render called!')
    return (
        <div>
            {this.renderAppOrSplash()}
            <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${APKEY}&libraries=places`}
            onLoad={this.handleLoadScript}
            />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {getLocationByIP, getCurrentWeather, getForecastWeather, updateWeatherStatus}
    , dispatch
  )
}

const mapStateToProps = ({weatherStatus}) => {weatherStatus}

export default connect(null, mapDispatchToProp)(AppFrame);
