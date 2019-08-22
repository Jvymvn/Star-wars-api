import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        characters: [],
        heading: 'Star Wars Characters'
    };

    componentDidMount() {
        // `https://swapi.co/api/people/?search=`
        const searchUrl = `https://swapi.co/api/people/`;

        fetch(`${searchUrl}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results);
                this.setState({ characters: data.results })
            })
        // .then(res => res.json())
        // .then(data => this.setState({ characters: [data] }))
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