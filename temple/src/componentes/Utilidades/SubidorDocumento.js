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
            manejadoresEventos: {
                addedfile: (fileIn) => {
                    // Un truquito con los callbacks n.n!
                    this.actualizarArchivo(fileIn, (fileOut) => {
                        this.props.actualizarArchivo(fileOut);
                    })

                },
                configuracionDjs: {
                    autoProcessQueue: false,
                    acceptedMimeTypes: ".pdf,.doc,.docx",
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictInvalidFileType: 'No puedes subir este tipo de archivo',
                    dictDefaultMessage: 'Sube o arrastra un documento .pdf, .doc o .docx',
                    dictRemoveFile: 'Cancelar subida',
                    dictMaxFilesExceeded: 'Solo puedes subir un documento'
                }
            }
        }
        this.actualizarArchivo = this.actualizarArchivo.bind(this);
    }

    actualizarArchivo(file,listo) {
        var reader = new FileReader();
        reader.onload = function (event) {
            file.dataURL = event.target.result;
            listo(file);
        };
        reader.readAsDataURL(file);
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