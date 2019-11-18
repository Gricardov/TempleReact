import React, { Component } from 'react';
import './PanelEjercicios.css';
import Masonry from 'react-masonry-css'
import TarjetaEjercicioGlobal from './TarjetaEjercicioGlobal';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

class PanelEjercicios extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="tarjeta-contenedora panel-ejercicios">
                <h2>Ejercicios globales</h2>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                    className={'my-masonry-grid'} // default ''
                    columnClassName="my-masonry-grid_column">
                    <TarjetaEjercicioGlobal img={'https://solviapp.com/media/publications/image_DjRrk2k.jpg'} descripcion={''}/>
                    <TarjetaEjercicioGlobal img={''} descripcion={'En el cuadrilátero ABCD está inscrito un círculo, siendo K, L, M, N los puntos de tangencia con los lados AB, BC, CD y DA, respectivamente. Las rectas DA y CB se cortan en S, mientras que BA y CD se cortan en P. Si S, K y M están alineados, probar que P, N y L también lo están.'} />
                    <TarjetaEjercicioGlobal img={'https://t2.up.ltmcdn.com/es/images/4/2/5/tipos_de_escala_musical_3524_orig.jpg'} descripcion={'a) Calcular qué nota es una séptima menor por encima de Re. b) ¿Y una tercera mayor por debajo?'} />
                    <TarjetaEjercicioGlobal img={''} descripcion={'Estas son las alturas de los jugadores de un equipo de baloncesto en tiene las siguientes alturas: 1,78; 1,98; 1,86; 2,05; 2,01; 2,13; 1,96; 1,89; 2,09; 1,98\na) Clasifica el carácter\n b) Haz una tabla de frecuencias absolutas, relativas, absoluta acumulada, relativa acumulada, agrupando los datos en intervalos 1,75-1,85 ; 1,85-1,95 ; 1,95-2,05 ; 2,05-2,15 '} />
                    <TarjetaEjercicioGlobal img={'https://solviapp.com/media/publications/15705578164831320994432.jpg'} descripcion={''} />
                    <TarjetaEjercicioGlobal img={'https://solviapp.com/media/publications/image_DjRrk2k.jpg'} descripcion={''} />

                </Masonry>
            </div>
        )
    }

}

export default PanelEjercicios;