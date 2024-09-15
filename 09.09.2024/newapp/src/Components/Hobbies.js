import React from 'react';

const Hobbies = () => {
    const hobbies = ['Listening to music', 'Gaming', 'Making music', 'Youtube', 'Anime', 'Making memes', 'Programming'];
    return (
        <div>
            <h2>My Hobbies:</h2>
                {hobbies.map((hobby, index) => (
                    <p key={index}>{hobby}</p>
                ))}
        </div>
    );
}

export default Hobbies;