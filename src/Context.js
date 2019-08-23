import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            heading: 'Star Wars Characters',
            searchTerm: '',
            onChange: this.onChange.bind(this),
            onSubmit: this.onSubmit.bind(this),
        }
    }

    componentDidMount() {
        const searchUrl = `https://swapi.co/api/people/`;

        fetch(`${searchUrl}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ characters: data.results })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const searchUrl = `https://swapi.co/api/people/?search=`;
        fetch(`${searchUrl}${this.state.searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState({ characters: data.results }))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;