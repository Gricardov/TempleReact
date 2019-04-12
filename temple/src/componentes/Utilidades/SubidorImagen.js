import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

class SubidorImagen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            configuracion: {
                iconFiletypes: ['.jpg', '.png', '.gif'],
                showFiletypeIcon: true,
                postUrl: 'no-url'
            },
            manejadoresEventos:{
                addedfile: (file) => this.props.actualizarImagen(file)
            },
            configuracionDjs:{
                autoProcessQueue: false,
                acceptedMimeTypes: ".jpeg,.jpg,.png,.gif",
                maxFiles: 1,
                addRemoveLinks: true,
                dictInvalidFileType: 'No puedes subir este tipo de archivo',
                dictDefaultMessage:'Sube o arrastra una imagen',
                dictRemoveFile: 'Cancelar subida',
                dictMaxFilesExceeded: 'Solo puedes subir una imagen'
            }
        }
    }

    render() {

        return (
            <DropzoneComponent config={this.state.configuracion}
                eventHandlers={this.state.manejadoresEventos}
                djsConfig={this.state.configuracionDjs}
            />
        );
    }
}

export default SubidorImagen;