import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAutocompletePlaces, getForecastWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {city : '', geocoord : {latitude : '', longitude : ''}};

        this.onSearchInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        this.setState({city : e.target.value})
    }

    onFormSubmit(e){
        e.preventDefault();
        //make api call, ajax request
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="field has-addons has-addons-centered"
            >
                <div className="control is-expanded has-icons-left has-icons-right">
                    <input
                        className="input is-large is-success"
                        type="text"
                        placeholder="Search for a City"
                        value={this.state.city}
                        onChange={this.onSearchInputChange}
                    />
                    <span className="icon is-medium is-left">
                        <i className="fa fa-search"></i>
                    </span>
                    <span className="icon is-right">
                        <i className="fa fa-times"></i>
                    </span>
                </div>

                <div className="control">
                    <button type="submit" className="button is-large is-success">Search</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getAutocompletePlaces, getForecastWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)