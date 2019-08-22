import React, { Component } from 'react';
import CharList from './CharList'

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            results: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const searchUrl = `https://swapi.co/api/people/?search=`;
        fetch(`${searchUrl}${this.state.searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState({ results: data }))
    }

    render() {
        return (
            <div>
                <h1>Search Characters</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Character Name: </label><br />
                    <input type='text' name='searchTerm' onChange={this.onChange} />
                    <button type='submit'>
                        Search
                    </button>
                </form>
                <hr />
                <CharList chars={this.state.results} />
            </div>
        )
    }
}
