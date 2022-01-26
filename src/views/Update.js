import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton'

const Update = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
    }, []);

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/player/edit/' + id, player)
            .then(res => 
                console.log(res),
                history.push('/player/list')
                )
            .catch(err => {
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
            <h1>Update Player</h1>
            {loaded && (
                <>
                    <Form
                        onSubmitProp={updatePlayer}
                        initialName={player.name}
                        initialPosition={player.position}
                        errors={errors}
                    />
                    <DeleteButton 
                    playerId = {player._id}
                    successCallback = {() => history.push('/')}
                    />
                </>
            )}
        </div>
    )
}

export default Update;