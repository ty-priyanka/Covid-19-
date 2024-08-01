import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapView = (props) => {


    console.log(props, "props")
    const position = [props.mapData.latitude, props.mapData.longitude]
    return (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
          
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>

                <Popup  >
                   Active:{props.covidData.ActiveCases} 
                    Recovered: {props.covidData.Recovered}
                    Deaths: {props.covidData.Deaths}
                </Popup>


            </Marker>
        </MapContainer>
    )
}

export default MapView;