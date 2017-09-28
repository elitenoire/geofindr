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
      this.props.getLocationByIP()
    }
  }


  renderAppOrSplash = () => {
    return this.state.scriptLoaded && !this.props.loading
              ? <App />
              : <Splash />
  }

  render() {
    console.log('render called!')
    return (
        <div>
            <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${APKEY}&libraries=places`}
            onLoad={this.handleLoadScript}
            />
            {this.renderAppOrSplash()}
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLocationByIP, getGeolocation }
    , dispatch
  )
}

const mapStateToProps = ({ status }) => ({loading : status.loading})

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);
