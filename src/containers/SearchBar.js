import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''};

        this.onSearchInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        this.setState({term : e.target.value})
    }

    onFormSubmit(e){
        e.preventDefault();
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
                        value={this.state.term}
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