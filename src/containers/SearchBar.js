import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { getAutocompletePlaces, getForecastWeather } from '../actions';

import _debounce from 'lodash.debounce';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {place : '', geocoord : this.clearCoord, loading : '', error : false};
        this.clearCoord = null //{latitude : '', longitude : ''};

        this.onSearchInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSelectInput = this.onSelectInput.bind(this);
        this.onError = this.onError.bind(this);
        // this.getGeocode = this.getGeocode.bind(this);
    }

    onInputChange(place){
        this.setState({place , geocoord : this.clearCoord, error : false})
    }

    onSelectInput(place){
        this.setState({place, loading :'is-loading'})
        this.getGeocode(place)

    }

    getGeocode = (place)=> {
        return geocodeByAddress(place)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) => {
                    this.setState({
                        loading : '',
                        geocoord : {
                            latitude : lat,
                            longitude : lng,
                        }})})
                .catch(err => this.setState({error : true, loading : ''}))
    }

    onFormSubmit(e){
        console.log(this.state.geocoord)
        e.preventDefault();
        this.setState({loading : 'is-loading'})
        //make api call, ajax request
        if(!this.state.geocoord){
            console.log('fetching geocoords..')
            this.getGeocode(this.state.place)
                .then(()=> console.log('fetched!'))
                .then(this.props.getForecastWeather(this.state.geocoord))
        }
        else this.props.getForecastWeather(this.state.geocoord)
        //clear reset input field
        this.setState({place : ''})
    }

    onError(){
        return this.state.error
                ? <p className="help is-danger has-text-centered">Something went wrong. Please refresh.</p>
                : <p></p>
    }

    setAutocompleteItemStyle({ formattedSuggestion }){
        return (
            <div>
                <span style={{marginRight: 8}}>
                    <i className="fa fa-map-marker"></i>
                </span>
                <span>
                    <strong>{ formattedSuggestion.mainText }</strong>{' '}
                    <small>{ formattedSuggestion.secondaryText }</small>
                </span>
            </div>
        )
    }

    render() {
        const inputProps = {
            value : this.state.place,
            onChange : this.onSearchInputChange,
            type : 'text',
            placeholder : 'e.g. London, United Kingdom'
        }
        const cssNames = {
            input : 'input is-large is-success',
            root : '',
        }
        const customBox = {
            autocompleteContainer : {border : '1px solid hsl(141, 71%, 48%)	'},
            autocompleteItemActive: { backgroundColor: 'hsl(141, 71%, 48%)	' ,color: '#fff' }
        }
        const btnStyle = `button is-large is-success ${this.state.loading}`

        return (
            <div className="field">
                <form
                    onSubmit={this.onFormSubmit}
                    className="field has-addons has-addons-centered"
                >
                    <div className="control is-expanded has-icons-left has-icons-right">
                        <Search
                            inputProps={inputProps}
                            classNames={cssNames}
                            styles={customBox}
                            clearable={true}
                            onSelect={this.onSelectInput}
                            onEnterKeyDown={this.onSelectInput}
                            autocompleteItem={this.setAutocompleteItemStyle}
                        />
                        <span className="icon is-medium is-left">
                            <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-right">
                            <i className="fa fa-times"></i>
                        </span>
                    </div>

                    <div className="control">
                        <button type="submit" className={btnStyle}>Search</button>
                    </div>
                </form>
                {this.onError()}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getAutocompletePlaces, getForecastWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)