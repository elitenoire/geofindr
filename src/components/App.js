import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css" />
        </Helmet>

      </div>
    );
  }
}

export default App;
