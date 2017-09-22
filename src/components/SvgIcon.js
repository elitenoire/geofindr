import React, { Component } from 'react';
// import { TweenMax, TimelineMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import { Animate, Icons } from '../utils';
// import Icons from '../utils/climacons-svg';
// import Animate from '../utils/animate-icons';

//TODO add style for icon component

class SvgIcon extends Component {
    componentDidMount(){
        if(this.props.animate){
            this.addAnimation(Animate[this.props.name])
        }
    }

    render() {
        return (
            <div className={`icon ${this.props.size}`}>
                {Icons[this.props.name]}
            </div>
        )
    }
}

export default GSAP()(SvgIcon)
