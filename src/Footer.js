import React, { Component,useEffect } from 'react';
import './footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDatalayerValue } from './DataLayer';

const Footer = ({ spotify }) => {
    const [{ token, item, playing }, dispatch] = useDatalayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };


    return (
        <div className='footer' >
            <div className='footer__left'>
                <img className='footer__albumlogo' src='https://lh3.googleusercontent.com/proxy/tmZOk3zqLYiw5M7Qnl9CO7_mns8H-MmkhxOq-VUQq-G_fvyMMohtsfFD8dBgOHpDRha6hiSejkFE3AySdvDAnOxKILesW8BAs1GlDU0GSQ' />
                {item ? (
                    <div className="footer__albuminfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                        <div className="footer__albuminfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                    )}
            </div>


            <div className='footer__center' >
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon onClick={skipNext} className='footer__icon' />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                        <PlayCircleOutlineIcon
                            onClick={handlePlayPause}
                            fontSize="large"
                            className="footer__icon"
                        />
                    )}
                <SkipNextIcon onClick={skipPrevious} className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className='footer__right' >
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon />
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}

export default Footer;