import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [player, setPlayer] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Player Name: {player.name}</p>
            <p>Preferred Position: {player.position}</p>
            <Link to={`/player/edit/${player._id}`}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;