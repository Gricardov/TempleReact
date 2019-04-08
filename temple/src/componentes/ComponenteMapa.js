import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state={
            posicion:{
                latitud:51.505,
                longitud:-0.09
            }
        }
        this.mostrarPosicion = this.mostrarPosicion.bind(this);
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>this.mostrarPosicion(position));
        } else {
            alert("Este navegador no soporta geolocalización :(");
        }
    }

    mostrarPosicion(position) {
        this.setState({
            posicion:{
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            }
        })
    }

    render() {

        const position = [this.state.posicion.latitud, this.state.posicion.longitud]

        const map = (
            <Map center={position} zoom={13} style={{
                width: "100%",
                height: "60vh"
            }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    maxZoom="18"
                    id='mapbox.streets'
                    format='jpg70'
                    accessToken='sk.eyJ1IjoiZ3JpY2FyZG92IiwiYSI6ImNqbnphd3FicjAwNHAzcG85bmowaWFyMDUifQ.CxTAN8PiT2jZkldTwukmPg'
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        )
        return map;
    }
}
export default Mapa