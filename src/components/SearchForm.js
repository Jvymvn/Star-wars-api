import React, { Component } from 'react';
import { Consumer } from '../Context'

export default class SearchForm extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { onSubmit, onChange } = value;
                    return (
                        <div>
                            <h1>Search Characters</h1>
                            <form onSubmit={onSubmit}>
                                <label>Character Name: </label><br />
                                <input type='text' name='searchTerm' onChange={onChange} />
                                <button type='submit'>
                                    Search
                    </button>
                            </form>
                            <hr />
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
