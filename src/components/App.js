import React from 'react';

import SearchBar from '../containers/SearchBar';
import Weather from './Weather';
import WeatherNow from '../containers/WeatherNow'

const App = () => {
  return (
    <div className="container is-fluid is-marginless	">
      <div className="block">
        <nav className="navbar has-shadow">
          <div className="navbar-brand ">
            <div className="navbar-item">
              <p className="title is-size-1 is-size-3-mobile has-text-right">Geo<span className="has-text-success">Findr</span></p>
            </div>
          </div>
        </nav>
      </div>
      <div className="block">
        <div className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container">
          <Weather>
            <div className="tile is-ancestor">
              <div className="tile is-4 is-parent">
                <div className="tile is-child notification is-warning">
                  <WeatherNow />
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child box"></div>
                <div className="tile is-child box"></div>
              </div>
            </div>
          </Weather>
        </div>
      </div>
    </div>
  );

}

export default App;
