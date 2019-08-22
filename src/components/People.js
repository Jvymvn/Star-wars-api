import React from 'react'

const People = (props) => {
    const { person } = props;
    return (
        <div className='col-md-6'>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{person.name}</h5>
                    <p className="card-text">
                        <strong>Character</strong>: {person.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default People;