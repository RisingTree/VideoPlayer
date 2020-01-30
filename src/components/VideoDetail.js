import React from 'react'

const Videodetail = ({video})=>{
    if(!video){
        return <div>Loading up...</div>;
    }
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className='ui embed'>
                <iframe title= 'video player 'src={videoSrc}/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <div className='description'><p>{video.snippet.description}</p></div>
            </div>
        </div>
    );
};

export default Videodetail