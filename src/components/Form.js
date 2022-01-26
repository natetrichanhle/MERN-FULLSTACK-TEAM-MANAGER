import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    const { initialName, initialPosition, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, position })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Player Name</label><br />
                <input
                    type="text"
                    value={name} name='name'
                    onChange={(e) => { setName(e.target.value) }}
                />
            </p>
            <p>
                <label>Preferred Position</label><br />
                <input
                    type="text"
                    value={position} name='position'
                    onChange={(e) => { setPosition(e.target.value) }}
                />
            </p>
            <Link to = '/player/list'>Cancel</Link>
            <input type="submit" />
        </form>
    )
}