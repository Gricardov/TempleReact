import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';
import {Cargando} from './CargandoComponente';

class SobreNosotros extends Component {

    constructor (props){

        super(props);
        
    }

    render(){

        const LideresTarjetas=()=>{
            
            if (this.props.estaCargando){

                return(
    
                    <div className="col-12 text-center">
        
                        <Cargando />
        
                    </div>
                
        
                );
    
            }

            else if (this.props.mensError){

                return(
    
                    <div className="col-12">    
                        <p className="text-danger">{this.props.mensError}</p>    
                        </div>
        
                );
    
            }
            else {

            const tarjeta=this.props.lideres.map((lider)=>{

                return (
                    
            <div key={lider.id} className="col-12 col-md m-1">
                <Card className="card-link">
                    <CardImg width="100%" height="400px" src={lider.img}>
                    </CardImg>
                    <CardBody>
                        <CardTitle>
                        {lider.nombre}
                        </CardTitle>
                        <CardText>
                        {lider.descripcion}
                        </CardText>
                    </CardBody>
                </Card>
                </div>

                    )


            })

            return tarjeta;

        }
        }
        
        return(

            <div className="container debajo-barra">
            <div className="row">
            <div className="col-12">
            <h4 className="text-center">Fundadores</h4>
            </div>
            </div>
            <div className="row">

                <LideresTarjetas />

                </div>
            </div>

        )



        }

        

        


    }



export default SobreNosotros;