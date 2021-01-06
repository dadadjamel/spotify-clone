import React, { Component } from 'react';
import './sidebar.css'
import Sidebaroption from './Sidebaroption';
import { useDatalayerValue } from './DataLayer';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDatalayerValue()
    return (
        <div className='sidebar' >
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <Sidebaroption Icon={HomeIcon}  title='Home' />
            <Sidebaroption Icon={SearchIcon} title='Search' />
            <Sidebaroption Icon={LibraryMusicIcon} title='Your library' />
            <br/>
            <strong className='sidebar__title' >PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist =>(
                <Sidebaroption  title={playlist.name} />
            ))}
            <Sidebaroption  title='Drama' />
        </div>
    );
}

export default Sidebar;