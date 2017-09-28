import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { getWeather, saveGeocoords } from '../actions';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {place : '', loading : '', blank : false, error : false};
        this.clearCoords = null //{latitude : '', longitude : ''};
        this.geocoords = this.clearCoords

        this.onSearchInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSelectInput = this.onSelectInput.bind(this);
        this.onError = this.onError.bind(this);
    }

    onInputChange(place){
        this.geocoords = this.clearCoords
        this.setState({place , error : false, blank : false})
    }

    onSelectInput(place){
        this.setState({place, loading :'is-loading'})
        this.getGeocode(place)
    }

    getGeocode = (place)=> {
        return geocodeByAddress(place)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) => {
                        this.geocoords = { lat, lng }
                        //dispatch geocoord to store
                        this.props.saveGeocoords(this.geocoords)
                        this.setState({ loading : ''})
                    }
                )
                .catch(err => this.setState({error : true, loading : ''}))
    }

    onFormSubmit(e){
        console.log(this.geocoords)
        console.log('blank ', this.state.blank)
        e.preventDefault();
        if(this.state.place === ''){
            this.setState({blank : true})
            return
        }
        this.setState({loading : 'is-loading'})
        //make api call, ajax request
        if(!this.geocoords){
            console.log('fetching geocoords..')
            this.getGeocode(this.state.place)
                .then(()=> console.log('fetched!'))
                .then(this.props.getWeather) //callback?check if error true,return otherwise run
        }
        else this.props.getWeather()
        //clear reset input field
        this.setState({place : '', loading : ''})
    }

    onError(){
        return this.state.error
                ? <p className="help is-danger has-text-centered">Something went wrong. Please refresh.</p>
                : this.state.blank
                ? <p className="help is-danger has-text-centered">Input field is blank</p>
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
            input : 'input is-large is-success is-normal-mobile',
        }
        const customBox = {
            root : {zIndex : 1},
            autocompleteContainer : {border : '1px solid hsl(141, 71%, 48%)	'},
            autocompleteItemActive: { backgroundColor: 'hsl(141, 71%, 48%)	' ,color: '#fff' }
        }
        const btnStyle = `button is-large is-normal-mobile is-success ${this.state.loading}`

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
                            debounce={350}
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
    return bindActionCreators({getWeather, saveGeocoords}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)