import React from 'react';

export default function VideoPlayer({from}) {
    if(from == '/'){
        return (
            <video  src={require('../footage/vd2.mp4')} type="video/mp4" style={{width:'100%'}} loop controls/>
        )
    }
    if(from == '/pedestrian'){
        return (
            <video  src='https://www.youtube.com/watch?v=oVSHtf2Tb-E' type="video/mp4" style={{width:'100%'}} loop controls/>
        )
    }  
    
}
