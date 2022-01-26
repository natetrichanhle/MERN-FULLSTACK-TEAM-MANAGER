import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayerList from '../components/PlayerList'
import { Link } from 'react-router-dom';

export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div>
            <Link to = '/player/new'>Add Player</Link>
            <hr />
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom} />}
        </div>
    )
}