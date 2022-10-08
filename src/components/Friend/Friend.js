import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const {id, name, username, email } = friend;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Email: {email}</p>
                    <div class="card-actions justify-end">
                        <Link to={`/friend/${id}`} class="btn btn-primary">{username}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friend;