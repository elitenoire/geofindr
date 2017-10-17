import React from 'react';
import { connect } from 'react-redux';

// import Overlay from 'react-overlay-loading/lib/OverlayLoader'
import Overlay from './Overlay';

const Weather = ({children, isActive}) => {
    return (
        <Overlay
            color={'#000'} // default is white
            //loader="ScaleLoader" // check below for more loaders
            text="Performing rain check..."
            active={isActive}
            backgroundColor={'#ecf0f1'} // default is black #27ae60
            opacity=".9" // default is .9
        >
            {children}
        </Overlay>
    )
}

const mapStateToProps = ({ overlay }) => ({isActive : overlay.overlayActive})

export default connect(mapStateToProps)(Weather)