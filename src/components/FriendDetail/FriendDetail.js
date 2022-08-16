import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1>{friend.id} {friend.username}</h1>
            <h1>{friend.name}</h1>
            <p>{friend.email}</p>
            <p>City:{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;