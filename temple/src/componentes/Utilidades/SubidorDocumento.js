import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

class SubidorDocumento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            configuracion: {
                iconFiletypes: ['.pdf', '.doc', '.docx'],
                showFiletypeIcon: true,
                postUrl: 'no-url'
            },
            manejadoresEventos:{
                addedfile: (file) => this.props.actualizarArchivo(file)
            },
            configuracionDjs:{
                autoProcessQueue: false,
                acceptedMimeTypes: ".pdf,.doc,.docx",
                maxFiles: 1,
                addRemoveLinks: true,
                dictInvalidFileType: 'No puedes subir este tipo de archivo',
                dictDefaultMessage:'Sube o arrastra un documento .pdf, .doc o .docx',
                dictRemoveFile: 'Cancelar subida',
                dictMaxFilesExceeded: 'Solo puedes subir un documento'
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

export default SubidorDocumento;