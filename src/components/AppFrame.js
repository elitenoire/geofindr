import React, { Component } from 'react';
import Script from  'react-load-script';

import Splash from './Splash';
import App from './App';

const APKEY = "";

class AppFrame extends Component {
  constructor(props){
    super(props)

    this.state = {scriptLoaded : false}

    this.handleLoadScript = this.handleLoadScript.bind(this)
  }

  handleLoadScript(){
    this.setState({scriptLoaded : true})
  }

  renderAppOrSplash(){
    return this.state.scriptLoaded
              ? <App />
              : <Splash />
  }

  render() {
    return (
        <div>
            <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${APKEY}&libraries=places,geometry`}
            onLoad={this.handleLoadScript}
            />
            {this.renderAppOrSplash()}
        </div>
    );
  }
}

export default AppFrame;
