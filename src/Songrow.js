import React, { Component } from 'react';
import './songrow.css'

const Songrow = ({ track,playSong  }) => {
    console.log('🎵',track);
    return (
        <div className='songrow' onClick={() => playSong(track.id)} >
            <img className='songrow__album' src={track.album.images[0].url} />
            <div className='songrow__info' >
                <h1>{track.name}</h1>
                <p>
                    {track.artists.
                    map(artist => artist.name).join(',')}
                    {track.album.name}
                </p>
            </div>

        </div>
    );
}

export default Songrow;