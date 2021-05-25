import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Popup, Circle, ZoomControl } from 'react-leaflet'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import React from 'react';

function LeafletMap({ theme, battleItems}) {

    //set max map bounds
    const corner1 = Leaflet.latLng(-90, -200)
    const corner2 = Leaflet.latLng(90, 200)
    const customBounds = Leaflet.latLngBounds(corner1, corner2)

    return(
        <MapContainer center={[28.987776073100964, -40.70433830991955]}
         zoom={3}
          minZoom={3}
           scrollWheelZoom={true}
            zoomControl={false}
             maxBounds={customBounds}
             maxBoundsViscosity={1}
              style={{ height: "100vh" }}
             >
            {theme == 'light' ? <TileLayer
                attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            /> : 
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />}
            {/* <ZoomControl position="bottomright"/>  */}
            {battleItems && battleItems.map((battle, index) => (                           
                <Circle key={index} pathOptions={{ color: '#d7263d' }} center={[battle.location.latitude, battle.location.longitude]}>
                    <Popup>
                        <h4>{battle.title}</h4>
                        <h5>{battle.date}</h5>                    
                    </Popup>
                </Circle>
            ))}            
        </MapContainer>
    );
}
export default LeafletMap


