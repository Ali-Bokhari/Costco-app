import ImageMarker from 'react-image-marker';
import { useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'

import Image from 'react-bootstrap/Image';
import {coordinates_arr} from "./aisle-coordinates"

function MapArea(props) {
    let s_markers=[];
    for (const i of props.slist){
        s_markers.push(coordinates_arr[i.aisle-1]);
    }
    const [markers, setMarkers] = useState(s_markers);

    function CustomMarker() {
        return (
          <Image src={redMarker}/>
        );
      };
    return(
        <ImageMarker src={costcoMap} markers={markers} onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])} markerComponent={CustomMarker}/>
    );
}

export default MapArea;


