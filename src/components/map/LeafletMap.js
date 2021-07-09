import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Popup, Circle, ZoomControl, CircleMarker } from 'react-leaflet'
import Modal from '@material-ui/core/Modal';
import React, { useState } from "react"

import './LeafletMap.scss';

function LeafletMap({ theme, battleItems, screenSize }) {

    const [modalOpen, setModalOpen] = useState({ show: false, content: null });

    const handleOpen = (battle) => {
        setModalOpen({ show: true, content: battle });
    };

    const handleClose = () => {
        setModalOpen({ show: false, content: null });
    };

    //set max map bounds
    const corner1 = Leaflet.latLng(-90, -200)
    const corner2 = Leaflet.latLng(90, 200)
    const customBounds = Leaflet.latLngBounds(corner1, corner2)

    //battle winner
    // const setWinner(side){

    // }


    return (
        <MapContainer center={[28.987776073100964, -40.70433830991955]}
            zoom={3}
            minZoom={3}
            scrollWheelZoom={true}
            zoomControl={false}
            maxBounds={customBounds}
            maxBoundsViscosity={1}
            style={{ height: "100vh" }}
        >
            {theme == 'light' ? <TileLayer className="map_attr"
                attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            /> :
                <TileLayer className="map_attr"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />}
            {/* <ZoomControl position="bottomright"/>  */}
            {battleItems && battleItems.map((battle, index) => (
                <div>
                    {screenSize > 728 ?
                        <Circle key={index} radius={1000} pathOptions={{ color: '#d7263d' }} center={[battle.location.latitude, battle.location.longitude]}>
                            <Popup>
                                <div className="battle_pop">
                                    <h4>{battle.title}</h4>
                                    <h5>{battle.date}</h5>
                                    <img src={battle.imageUrl} height="90"></img>
                                    <div className="battle_pop_body">
                                        <h5 className="header">Belligerents</h5>
                                        <div className="section belligerents">
                                            <div className="section_child belligerents_a a">
                                                <ul className="side_ul">{battle.sideA.participants.map((item, i) => { return <li key={i}><img src={item.flagUrl}></img><span>{item.name}</span></li> })}</ul>
                                            </div>
                                            <div className="section_child belligerents_b b">
                                                <ul className="side_ul">{battle.sideB.participants.map((item, i) => { return <li key={i}><img src={item.flagUrl}></img><span>{item.name}</span></li> })}</ul>
                                            </div>
                                        </div>
                                        <h5 className="header">Commanders</h5>
                                        <div className="section commanders">
                                            <div className="section_child commanders_a a">
                                                <ul className="side_ul">{battle.sideA.commanders && battle.sideA.commanders.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                            <div className="section_child commanders_b b">
                                                <ul className="side_ul">{battle.sideB.commanders && battle.sideB.commanders.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                        </div>
                                        <h5 className="header">Strength</h5>
                                        <div className="section strength">
                                            <div className="section_child strength_a a">
                                                <ul className="side_ul">{battle.sideA.strength && battle.sideA.strength.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                            <div className="section_child strength_b b">
                                                <ul className="side_ul">{battle.sideB.strength && battle.sideB.strength.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                        </div>
                                        <h5 className="header">Losses</h5>
                                        <div className="section losses">
                                            <div className="section_child losses_a a">
                                                <ul className="side_ul">{battle.sideA.losses && battle.sideA.losses.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                            <div className="section_child losses_b b">
                                                <ul className="side_ul">{battle.sideB.losses && battle.sideB.losses.split(',').map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                            </div>
                                        </div>
                                        <h5 className="header">Outcome</h5>
                                        <div className="section">
                                            <div className="outcome">
                                                <div className="outcome outcome_a a" style={battle.sideA.victory ? { background: "green" } : { background: "red" }}>
                                                    <h5 className="outcome_text">{battle.sideA.victory ? battle.outcome : ""}</h5>
                                                </div>
                                            </div>
                                            <div className="outcome">
                                                <h5>{battle.sideB.victory ? battle.outcome : ""}</h5>
                                                <div className="outcome outcome_b b" style={battle.sideB.victory ? { background: "green" } : { background: "red" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5><a href={battle.url} target="_blank">See on Wikidata</a></h5>
                                </div>
                            </Popup>
                        </Circle>
                        : <CircleMarker key={index} pathOptions={{ color: '#d7263d' }} center={[battle.location.latitude, battle.location.longitude]} eventHandlers={{ click: (e) => { handleOpen(battle) } }}></CircleMarker>}
                </div>
            ))}
            <Modal open={modalOpen.show} onClose={handleClose}>
                {modalOpen.content &&
                    <div key={modalOpen.content.id} className="battle_modal">
                        <h2>{modalOpen.content.title}</h2>
                        <h3>{modalOpen.content.date}</h3>
                        <img src={modalOpen.content.imageUrl}></img>
                        <a href={modalOpen.content.url}>Link</a>
                    </div>
                }
            </Modal>
        </MapContainer>
    );
}
export default LeafletMap


