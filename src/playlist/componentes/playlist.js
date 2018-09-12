import React from 'react';
import Media from './media.js';
import './css/playlist.css';

function Playlist(props){
    return (
        <div>
            {   
                props.playlist.map((item)=>{
                    return <Media {...item}key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;