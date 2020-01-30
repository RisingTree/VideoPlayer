import React from 'react'

const VideoItem = ({video, onVideoSelect})=> { 
    return(
    <div  onClick ={()=>onVideoSelect(video)}style = {{display:'flex important', alignItems:'center !important',cursor:'pointer'}}className='item'>
            <div className='image'>
                <img style ={{maxWidth:'180px'}}className='ui image' alt ='thumbnail' src ={video.snippet.thumbnails.default.url}/>
            </div>
            <div className='content'>
                <h3 className= 'header' >{video.snippet.title}</h3>
                <div className='meta'>
                    <span>Description</span>
                </div>
                <div className='description'>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
};

export default VideoItem;