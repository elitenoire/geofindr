import React from 'react';

const Splash = () => {
    return (
      <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-size-2-tablet is-size-1-desktop">Geo<span className="has-text-success">Findr</span></p>
          <p className="subtitle is-size-4-tablet is-size-3-desktop">Real time weather geolookup</p>
          <button className="button is-loading is-white is-medium"></button>
        </div>
      </div>
      <div className="hero-footer">
        <div className="container has-text-centered">
          <p className="subtitle is-size-6-touch has-text-success">Powered by React and Dark Sky</p>
        </div>
      </div>
    </div>
    )
  }

  export default Splash;