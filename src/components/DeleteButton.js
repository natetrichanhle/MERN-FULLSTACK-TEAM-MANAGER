import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePlayer}>
            Delete
        </button>
    )
}