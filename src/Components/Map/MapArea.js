import ImageMarker from 'react-image-marker';
import {useEffect, useState} from 'react';

import costcoMap from '../../images/LabledMap.png'
import redMarker from '../../images/redmarker.png'
import blueMarker from '../../images/bluemarker.png'
import ListPopover from './ListPopover';

import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
    const [itemMarkers, setitemMarkers] = useState([]);

    useEffect(()=>{
            const tempItemMarkers = []
            for (const catitems of props.slist) {
                tempItemMarkers.push(coordinates_arr[catitems.aisle]);
            }
            setitemMarkers(tempItemMarkers)
        },
        [props.slist]
    )


    function handleMarker(e) {
      const litems = props.slist?.[e.itemNumber]?.items || [];
      // const litems = props.slist?.[e.itemNumber]?.items || [];
      if (areAllItemsChecked(litems)) {
        return (
          <ListPopover imgsrc={blueMarker} items={litems}/>
        )
      } else {
        return (
          <ListPopover imgsrc={redMarker} items={litems}/>
        )
      }
    }

    return (
        <div className="map-area">
            <ImageMarker src={costcoMap} markers={itemMarkers} markerComponent={handleMarker}/>
        </div>
    );
}

export default MapArea;


