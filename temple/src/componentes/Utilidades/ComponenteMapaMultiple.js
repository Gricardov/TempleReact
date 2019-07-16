import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Col, Row } from 'reactstrap';
import TarjetaPerfil from './TarjetaPerfil';
import L from 'leaflet';

class MapaMultiple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posicion: {
                latitud: -12.081457,
                longitud: -77.222645,
                // Para saber si es la ubicación predeterminada o ha cambiado por el navegador del usuario
                zoom: 14,
                solicitandoUbicacion: true,
                errorUbicacion: false,
                mensaje: ''
            }
        }
        this.exitoPosicion = this.exitoPosicion.bind(this);
        this.errorPosicion = this.errorPosicion.bind(this);
        this.actualizarZoom = this.actualizarZoom.bind(this);
    }

    componentDidMount() {

        // Si el mapa solo muestra coordenadas, ya no solicita ubicación
        if (!this.props.soloMuestra) {
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
    }

    errorPosicion(positionError) {
        this.setState({
            posicion: {
                ...this.state.posicion,
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
                mensaje: 'Ubicación detectada automáticamente',
                solicitandoUbicacion: false,
                errorUbicacion: false
            }
        })
        // Le aviso al padre que las coordenadas han cambiado
        if (this.props.actualizarCoordenadas) {
            this.props.actualizarCoordenadas({ latitud: this.state.posicion.latitud, longitud: this.state.posicion.longitud })
        }
    }


    actualizarZoom(event) {
        this.setState({
            posicion: {
                ...this.state.posicion,
                zoom: event.target.getZoom()
            }
        })
    }

    render() {
        const posicion = [this.state.posicion.latitud, this.state.posicion.longitud];

        let posicionesProfesores = [];

        const iconoMarcador = L.icon({
            iconUrl: '../../recursos/imagenes/ubicacionProfesor.png',
            iconSize: [64, 64],
            iconAnchor: [32, 64],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null
        });

        if (this.props.resultados) {
            posicionesProfesores = this.props.resultados.map((e, i) => {
                return (
                    <Marker position={[e.latitud, e.longitud]} icon={iconoMarcador}
                        draggable={false} key={i}>
                        <Popup>
                            <TarjetaPerfil datos={e} obtenerPerfil={this.props.obtenerPerfil} />
                        </Popup>
                    </Marker>
                )
            })
        }
        return (
            <>
                <Row className="justify-content-between">
                    <Col xs={6}>
                        <p>Puedes mover el marcador para establecer tu ubicación exacta. </p>
                    </Col>
                    <Col xs={6}>
                        <p className={this.state.posicion.solicitandoUbicacion
                            ?
                            'float-right text-warning'
                            :
                            this.state.posicion.errorUbicacion
                                ?
                                'float-right text-danger'
                                :
                                'float-right text-success'}>
                            {this.state.posicion.mensaje}
                        </p>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Map center={posicion} zoom={this.state.posicion.zoom} style={{
                        width: "100%",
                        height: "100vh"
                    }}
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
                        <Marker position={posicion || [this.props.posicion.latitud, this.props.posicion.longitud]}
                            draggable={false}>
                            <Popup>
                                Tu ubicación
                            </Popup>
                        </Marker>

                        {posicionesProfesores}

                    </Map>
                </Row>
            </>
        );
    }
}
export default MapaMultiple