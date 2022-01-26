import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../components/Form';

export default () => {
    const history = useHistory();
    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player/new', player)
            .then(res => {
                setPlayers([...players, res.data]);
                history.push('/player/list');
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    
    return (
        <div>
            <Link to = '/player/list'>Home</Link>
            <Form
                onSubmitProp={createPlayer}
                initialName=''
                initialPosition=''
                errors = {errors}
            />
        </div>
    )
}