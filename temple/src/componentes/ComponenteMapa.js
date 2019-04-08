import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class ContenedorMapa extends Component {

    constructor(props) {
        super(props);
        this.cargarUbicaciones = this.cargarUbicaciones.bind(this);
    }

    cargarUbicaciones(mapProps, map) {
    }


    render() {
        return (
            <Map google={this.props.google}
                 zoom={14}
                 style={{
                    width: '50vw',
                    height: '50vh'
                  }}
                 onReady={() => this.cargarUbicaciones()}>

                <Marker /*onClick={this.onMarkerClick}*/
                    name={'Current location'}
                    position={{ lat: 37.778519, lng: -122.405640 }}
                />

                <InfoWindow /*onClose={this.onInfoWindowClose}*/>
                    <div>
                        <h1>A gozar la vida</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDVicBw0PHNU3K2KWp8kEeHxR_ge8F2OY0"
})(ContenedorMapa)