import React from 'react';

import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
const Scene = ()=>{
    return(
        <Map center={{lng: 116.402544, lat: 39.928216}} zoom="11" style={{height:1024}}>
        <Marker position={{ lng: 116.402544, lat: 39.928216 }} icon={undefined} map={undefined} />
        <NavigationControl map={undefined} /> 
        <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" map={undefined}/>
    </Map>
    )
};
export default Scene
