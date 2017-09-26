import React, { Component } from 'react';
import Script from  'react-load-script';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/Splash';
import App from '../components/App';
import { getLocationByIP, getGeolocation } from '../actions';

const APKEY = "AIzaSyD5MWT0TdVQ-AGaAbqAOO1KEwdFr8wNhxY";

class AppFrame extends Component {
  constructor(props){
    super(props)

    this.state = {scriptLoaded : false, hasLocation : false}

    this.positionOptions = {maximumAge: 75000, enableHighAccuracy : true, timeout : 5000}

  }

  componentDidMount() {
    console.log('mount called!')
    this.getGeolocation()
    // this.getIPLocation()
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
      this.props.getGeolocation(geolocation)
    }
    else{
      console.log('location off!')
      //use ip based geolocator
      this.getIPLocation()
    }
  }


  renderAppOrSplash = () => {
    const { currentWeather } = this.props;
    return this.state.scriptLoaded && !this.props.ipGeocode.error //this.state.hasLocation && this.props.statusFlags
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
  return bindActionCreators({ getLocationByIP, getGeolocation }
    , dispatch
  )
}

const mapStateToProps = ({ ipGeocode }) => ({ipGeocode})

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);
