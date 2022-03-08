import ImageMarker, { Marker } from 'react-image-marker';
import {useEffect, useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'

import Image from 'react-bootstrap/Image';
import {coordinates_arr} from "./aisle-coordinates"

function MapArea(props) {
    // console.log(coordinates_arr)
    const [markers, setMarkers] = useState([]);

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


