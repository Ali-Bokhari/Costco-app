import ImageMarker from 'react-image-marker';
import {useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'
import blueMarker from '../../images/bluemarker.png'

import Image from 'react-bootstrap/Image';
import {coordinates_arr} from "./aisle-coordinates"
import "./MapArea.css"

function MapArea(props) {
    let s_markers = [];
    for (const i of props.slist) {
        s_markers.push(coordinates_arr[i.aisle - 1]);
    }

    const [redMarkers, setRedMarkers] = useState(s_markers);
    const [blueMarkers, setBlueMarkers] = useState(s_markers.splice(2, 1));

    function RedMarker() {
        return (
            <Image src={redMarker}/>
        );
    }

    function BlueMarker() {
        return (
            <Image src={blueMarker}/>
        );

    }

    return (
        <div className="map-area">
            <div id="bottom-layer">
                <ImageMarker src={costcoMap} markers={redMarkers} markerComponent={RedMarker}/>
            </div>
            <div id="upper-layer">
                <ImageMarker src={costcoMap} markers={blueMarkers} markerComponent={BlueMarker}/>
            </div>
        </div>
    );
}

export default MapArea;


