import React, { Component } from 'react';
// import { TweenMax, TimelineMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import { Animate, Icons } from '../utils';
// import Icons from '../utils/climacons-svg';
// import Animate from '../utils/animate-icons';

class SvgIcon extends Component {
    componentDidMount(){
        this.addAnimation(Animate.SUN)
    }

    render() {
        return (
            <div className="icon">
                {Icons.SUN}
            </div>
        )
    }
}

export default GSAP()(SvgIcon)
