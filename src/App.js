import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDatalayerValue } from './DataLayer'
import Player from './Player';

const spotify = new SpotifyWebApi()

// 9ba0e3ed2dc94afa82c292001441619e

function App() {
  const [{ user, token }, dispatch] = useDatalayerValue()

  useEffect(() => {
    const hash = getTokenfromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcGGIeMEDcj97').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }


  }, [token, dispatch])

  console.log('❤', user);
  console.log('🔐', token);
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
      {/* {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      } */}
    </div>
  );
}

export default App;
