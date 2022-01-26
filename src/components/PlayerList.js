import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const PlayerList = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayers(res.data));
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }

    return (
        <div>
            {players.map((player, index) => {
                return (
                    <p key={index}>
                        <Link to={'/player/' + player._id}>
                            {player.name}
                        </Link>
                        |
                        {player.position}
                        | 
                        <Link to={'/player/edit/' + player._id}>
                            Edit
                        </Link>
                        |
                        <DeleteButton
                            playerId={player._id}
                            successCallback={() => removeFromDom(player._id)}
                        />
                    </p>
                )
            })}
        </div >
    )
}

export default PlayerList;