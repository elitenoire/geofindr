import React, { Component } from 'react';
import { connect } from 'react-redux';
// import WeatherIcon from 'react-animated-weather';

class WeatherNow extends Component {
    render(){
        const { weather, main, wind, sys, name, clouds, dt} = this.props.current
        return (
            <div>
                <p className="title">{`${name}, ${sys.country}`}</p>
                <p className="title">{`${main.temp} °C`}</p>
                <p className="subtititle">{`H${main.temp_max}°C`}</p>
                <p className="subtititle">{`L${main.temp_min}°C`}</p>
                <p className="subtititle">{`${main.pressure}hPa`}</p>
                <p className="subtititle">{`${main.humidity}%`}</p>
                <p className="subtititle">{`${wind.deg}°`}</p>
                <p className="subtititle">{`${wind.speed}mps`}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ weatherdata }) => ({current : weatherdata.weather.current})

export default connect(mapStateToProps)(WeatherNow)