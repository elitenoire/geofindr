import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import _ from 'lodash';
import { TweenMax, TimelineMax } from 'gsap';
var $R = require('rquery')(_, React, ReactDOM, TestUtils);


//Animation Object
const Animate = {};

//ANIMATION
Animate.SNOWFLAKE = ({target}) => {
    const elem = target.find({className : 'climacon_componentWrap-snowflake'});
    return rotate(elem, 36)
}
Animate.SUN = ({target}) => {
    const spokes = [[],[]]
    const elem = target.find({className : 'climacon_componentWrap-sun'});
    $R(target[0]).find('.climacon_componentWrap-sunSpoke > .climacon_component-stroke_sunSpoke').components
        .forEach((spoke,index) => spokes[index & 1].push(spoke))
    // const oddSpoke = target.find({className : 'climacon_componentWrap-sunSpoke'}).findAllInChildren()
    // const oddSpoke = target.findAll({className : 'climacon_component-stroke_sunSpoke'});//.findAllInChildren()
    // const evenSpoke = target.find({className : 'climacon_component-stroke_sunSpoke:nth-child(even)'});//.findAllInChildren()
    // console.log('spoke', spoke)
    const tlm = new TimelineMax({repeat:-1, ease: 'Linear.easeNone'})
    // console.log('oddSpoke ', oddSpoke)
    // return tlm.add([normalize(target), rotate(elem, 12), scale(spokes[0], 0), scale(spokes[1], 4.5)]);
    return scale(spokes[0], 4.5)
    // scale(".climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke:nth-child(odd)", 0);
    // scale(".climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke:nth-child(even)", 4.5);
}
Animate.CLOUD_FOG_MOON =  ({target}) => {
    const lines = [[],[]]
    $R(target[0]).find('.climacon_component-stroke_fogLine').components
        .forEach((line,index) => lines[index & 1].push(line))
    return new TimelineMax().add([normalize(target),translate(lines[0],0,6,2.5,true),translate(lines[1],9,6,2.5,true)])
}

//HELPERS
const normalize = (target) => {
    const all = $R(target[0]).find('g,path,circle,rect').components
    return new TimelineMax().to(all, 18, {transformOrigin:"50% 50%", ease:'Linear.easeNone'});
}
const rotate = (elem,speed) => TweenMax.to(elem, speed, {rotation:360, transformOrigin:"50% 50%", repeat:-1, ease:'Linear.easeNone'});
const scale = (elem, delay) => {
    const tlm = new TimelineMax({repeat:-1, yoyo: true, ease: 'Linear.easeNone', delay:delay });
    return tlm.fromTo(elem, 3, {scale:1}, {scale:0.5});
}
const translate = (elem, delay, speed, x, opacity) => {
    var tlm = new TimelineMax({repeat:-1, delay:delay, yoyo: true, ease: 'Sine.easeInOut' });
    return opacity  ?   tlm.fromTo(elem, speed, {x:x}, {x:-x}, {x:0} )
                            .fromTo(elem, speed/3, {opacity:0.5}, {opacity:1, repeat:1, yoyo:true, ease:'Linear.easeNone'}, 0)
                    :   tlm.fromTo(elem, speed, {x:x}, {x:-x}, {x:0});
}


export default Animate;

