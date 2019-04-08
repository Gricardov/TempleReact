import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Col, Row } from 'reactstrap';

class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posicion: {
                latitud: -12.08632442,
                longitud: -77.22255707,
                // Para saber si es la ubicación predeterminada o ha cambiado por el navegador del usuario
                zoom: 14,
                ubicacionPredeterminada: true,
                solicitandoUbicacion: true,
                errorUbicacion: false,
                mensaje: ''
            }
        }
        this.exitoPosicion = this.exitoPosicion.bind(this);
        this.errorPosicion = this.errorPosicion.bind(this);
        this.actualizarPosicion=this.actualizarPosicion.bind(this);
        this.actualizarZoom=this.actualizarZoom.bind(this);
    }

    componentDidMount() {

        // Establezco el mensaje
        this.setState({
            posicion: {
                ...this.state.posicion,
                mensaje: 'Solicitando geolocalización...',
                solicitandoUbicacion: true
            }
        })

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.exitoPosicion, this.errorPosicion)
        } else {
            this.setState({
                posicion: {
                    ...this.state.posicion,
                    mensaje: 'Este navegador no soporta ubicación automática',
                    solicitandoUbicacion: false,
                    errorUbicacion: true
                }
            })
        }
    }

    errorPosicion(positionError) {
        this.setState({
            posicion: {
                ...this.state.posicion,
                ubicacionPredeterminada: true,
                mensaje: 'No se ha podido obtener la ubicación automáticamente',
                solicitandoUbicacion: false,
                errorUbicacion: true
            }
        })
    }

    exitoPosicion(position) {

        this.setState({
            posicion: {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude,
                ubicacionPredeterminada: false,
                mensaje: 'Ubicación detectada automáticamente',
                solicitandoUbicacion: false,
                errorUbicacion: false
            }
        })
    }

    actualizarPosicion(event){

        this.setState({
            posicion: {
                ...this.state.posicion,
                latitud:event.target.getLatLng().lat,
                longitud:event.target.getLatLng().lng,
                ubicacionPredeterminada: true
                
            }
        })
    }

    actualizarZoom(event){
        this.setState({
            posicion:{
                ...this.state.posicion,
                zoom: event.target.getZoom()
            }
        })
    }

    render() {

        const posicion = [this.state.posicion.latitud, this.state.posicion.longitud]
        const mapa = (
            <>
                <Row className="justify-content-between">
                    <div>
                        <p>Puedes mover el marcador para establecer tu ubicación exacta. </p>
                    </div>
                    <div>
                        <p className={this.state.posicion.solicitandoUbicacion ? 'text-warning' : this.state.posicion.errorUbicacion ? 'text-danger' : 'text-success'}>{this.state.posicion.mensaje}
                        </p>
                    </div>
                </Row>
                <Row>
                    <Map center={posicion} zoom={this.state.posicion.zoom} style={{
                        width: "100%",
                        height: "60vh"
                    } }
                    animate={true}
                    onzoomend={this.actualizarZoom}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            maxZoom="18"
                            id='mapbox.streets'
                            format='jpg70'
                            accessToken='sk.eyJ1IjoiZ3JpY2FyZG92IiwiYSI6ImNqbnphd3FicjAwNHAzcG85bmowaWFyMDUifQ.CxTAN8PiT2jZkldTwukmPg'
                        />
                        <Marker position={posicion}
                                draggable={true}
                                ondragend={this.actualizarPosicion}
                                
                                >
                            <Popup>Puedes moverme para especificar tu ubicación</Popup>
                        </Marker>
                    </Map>
                </Row>
            </>
        );
        return mapa;
    }
}
export default Mapa