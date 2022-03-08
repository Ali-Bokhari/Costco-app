import MapArea from '../Components/Map/MapArea';
import BottomNav from "../Components/BottomNav";
import Header from "../Components/Header";

function Map() {
    return (
        <div>
            <Header title={"Navigation - Map"}/>
            <MapArea/>
            <BottomNav/>
        </div>
    )
}

export default Map;