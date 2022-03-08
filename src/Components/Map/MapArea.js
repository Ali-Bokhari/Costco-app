import ImageMarker, { Marker } from 'react-image-marker';
import { useState } from 'react';

import costcoMap from '../../images/LabledMap.png'

function MapArea(props) {
    let [markers, setMarkers] = useState([]);
    return(
        <ImageMarker
        src={costcoMap}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
      />
    );
}

export default MapArea;