import React, { Component } from 'react';
import { connect } from 'react-redux';

import Overlay from 'react-overlay-loading/lib/OverlayLoader'

const Weather = ({children, loading}) => {

    return (
        <Overlay
            color={'#ecf0f1'} // default is white
            loader="ScaleLoader" // check below for more loaders
            text="Performing rain check..."
            active={loading}
            backgroundColor={'#27ae60'} // default is black
            opacity=".9" // default is .9
        >
            {children}
        </Overlay>
    )
}

const mapStateToProps = ({ weather }) => ({loading : weather.loading})

export default connect(mapStateToProps)(Weather)