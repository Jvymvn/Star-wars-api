import React, { Component } from 'react'
import { Consumer } from '../Context'
import Spinner from './layout/Spinner'
import People from '../components/People'

class CharList extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { characters, heading } = value;
                    if (characters === undefined || characters.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <h3>{heading}</h3>
                                <div className="row">
                                    {characters.map(person => (
                                        < People key={person.name} person={person} />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default CharList;