import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="min-h-screen card lg:card-side bg-slate-400-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions">
                    <Link to='' class="btn btn-primary">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;