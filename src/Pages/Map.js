import MapArea from '../Components/Map/MapArea';
import BottomNav from "../Components/BottomNav";
import Header from "../Components/Header";

function Map (props){
    return (
        <div>
            <Header title={"Navigation - Map"}/>
            <MapArea slist={props.slist}/>
            <BottomNav/>
        </div>
    )
}

export default Map;