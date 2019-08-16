import React, { Component } from 'react';
import { Fade } from 'react-animation-components';

class TarjetaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Fade in>
                <div className="tarjeta-detalle-ejercicio">
                <div className="encabezado-detalle-ejercicio">
                        <span className="fa fa-arrow-left" onClick={()=>{this.props.volverMenu()}}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="asunto-detalle-ejercicio">
                        <h1>Profe ayúdeme porfa no me saleProfe ayúdeme porfa no me sale estoy preocupadooooProfe ayúdeme porfa no me sale estoy preocupadoooo</h1>
                    </div>
                    <div className="estado-detalle-ejercicio">
                        Sin revisar
                    </div>
                    <div className="contenido-detalle-ejercicio">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                             Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                              natoque penatibus et magnis dis parturient montes, nascetur
                               ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                                 pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                   Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                     eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                       viverra quis, feugiat a, tellus. Phasellus viverra nulla
                                        ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                         Etiam ultricies nisi vel augue. Curabitur ullamcorper
                                          ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
                                           tempus, tellus eget condimentum rhoncus, sem quam semper
                                            libero, sit amet adipiscing sem neque sed ipsum.
                                             Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                                              id, lorem. Maecenas nec odio et ante tincidunt tempus.
                                               Donec vitae sapien ut libero venenatis faucibus. Nullam
                                                quis ante. Etiam sit amet orci eget eros faucibus
                                                 tincidunt. Duis leo. Sed fringilla mauris sit amet
                                                  nibh. Donec sodales sagittis magna. Sed consequat,
                                                   leo eget bibendum sodales, augue velit cursus nunc,
                        </p>
                    </div>
                    <div className="mensaje-detalle-ejercicio">
                        <div>Cajita</div>
                    </div>
                    <div className="pie-detalle-ejercicio">
                        <div>Pie</div>
                    </div>

                </div>

            </Fade>
        )
    }

}

export default TarjetaDetalle;