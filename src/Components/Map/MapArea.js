import ImageMarker from 'react-image-marker';
import {useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'
import blueMarker from '../../images/bluemarker.png'

import Image from 'react-bootstrap/Image';
import {coordinates_arr} from "./aisle-coordinates"
import "./MapArea.css"

const areAllItemsChecked = (items) => {
    for (const i of items) {
        if (!i.isChecked) {
            return false;
        }
    }
    return true;
}

function MapArea(props) {
    const [redMarkers, setRedMarkers] = useState([]);
    const [blueMarkers, setBlueMarkers] = useState([]);

    for (const itemGroup of props.slist) {
        if (areAllItemsChecked(itemGroup.items)) {
            blueMarkers.push(coordinates_arr[itemGroup.aisle - 1])
        } else {
            redMarkers.push(coordinates_arr[itemGroup.aisle - 1]);
        }
    }

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


