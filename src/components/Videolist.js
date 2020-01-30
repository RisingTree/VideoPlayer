import React from 'react'
import Videoitem from './Videoitem'

const Videolist = ({videos, onVideoSelect})=>{
    const renderList =videos.map((video)=>{
        return <Videoitem key ={video.id.videoId} onVideoSelect= {onVideoSelect} video= {video}/>;
    });
    return(
        <div className='ui divided items'>{renderList}</div>
    )
};

export default Videolist;