import ImageMarker from 'react-image-marker';
import { useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'
import blueMarker from '../../images/bluemarker.png'

import Image from 'react-bootstrap/Image';
import {coordinates_arr} from "./aisle-coordinates"

let markcolor = true;

function MapArea(props) {
    let s_markers=[];

    for (const i of props.slist){
        s_markers.push(coordinates_arr[i.aisle-1]);
    }
    const [markers, setMarkers] = useState(s_markers);

    function CustomMarker() {
      if(markcolor) {
        return (
          <Image src={redMarker}/>
        );
      } else {
        return (
          <Image src={blueMarker}/>
        );
      }
        
    }

    function addMarker (marker) {
      markcolor = false;
      setMarkers((prev) => [...prev, marker]);
    }

    return(
        <ImageMarker src={costcoMap} markers={markers} onAddMarker={addMarker} markerComponent={CustomMarker}/>
    );
}

// (marker) => setMarkers((prev) => [...prev, marker])

export default MapArea;


