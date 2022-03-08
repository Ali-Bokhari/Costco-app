import ImageMarker, { Marker } from 'react-image-marker';
import {useEffect, useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import {coordinates_arr} from "./aisle-coordinates"

function MapArea(props) {
    console.log(coordinates_arr)
    let [markers, setMarkers] = useState(coordinates_arr);
    // useEffect(() => {console.log(markers)}, [markers])
    return(
        <ImageMarker
        src={costcoMap}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
      />
    );
}

export default MapArea;


