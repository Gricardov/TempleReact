import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar';
import { guid } from 'react-agenda';
import 'moment/locale/es-us';
import ModalConfirmacion from '../../Utilidades/ModalConfirmacion';

let moment = require('moment');
const localizer = momentLocalizer(moment);

const estaDentroDeAlgunEvento = (eventos, inicio, fin) => {

  // Recorro todos los eventos
  for (var i = 0; i < eventos.length; i++) {
    // Para que haya superposición, algún tiempo de evento debe estar dentro de los límites de inicio y fin
    let e = eventos[i];
    if (inicio >= e.start && inicio <= e.end || fin >= e.start && fin < e.end) {
      return true;
    }


  }
  return false;
}

/*const limpiarHorario = (horario, eventos) => {
  let horarios = [];

  let momentoInicio = moment(horario.fecIni).toDate();
  let momentoFin = moment(horario.fecFin).toDate();

  for (var i = 0; i < eventos.length; i++) {
    let eventoActual = eventos[i];
    let eventoActualFecIni = moment(eventoActual.fecIni).toDate();
    let eventoActualFecFin = moment(eventoActual.fecFin).toDate();

    // Solo voy a comparar contra los reservados
    if (eventoActual.idCon) {
      alert('for')

      if (eventoActualFecIni > momentoInicio && eventoActualFecIni < momentoFin
        && eventoActualFecFin > momentoInicio && eventoActualFecFin < momentoFin) {
        alert('a')
        // Si es que el reservado está completamente metido dentro del horario, que divida el horario
        let fechaAux = eventoActualFecIni;
        fechaAux.setMinutes(fechaAux.getMinutes() - 1);

        let evAux1 = {
          id: guid(),
          title: 'individual',
          start: momentoInicio,
          end: fechaAux
        }

        let fechaAux2 = eventoActualFecFin;
        fechaAux2.setMinutes(fechaAux2.getMinutes() + 1);

        let evAux2 = {
          id: guid(),
          title: 'individual',
          start: fechaAux2,
          end: momentoFin
        }
        horarios.push(evAux1);
        horarios.push(evAux2);
      }

      // Si solo chocan por arriba
      else if (eventoActualFecIni < momentoInicio && eventoActualFecFin > momentoInicio && eventoActualFecFin < momentoFin) {
        alert('b')

        let fechaAux = eventoActualFecFin;
        fechaAux.setMinutes(fechaAux.getMinutes() + 1);

        let evAux1 = {
          id: guid(),
          title: 'individual',
          start: fechaAux,
          end: momentoFin
        }
        horarios.push(evAux1);


      }

      // Si solo chocan por abajo
      else if (eventoActualFecFin > momentoFin && eventoActualFecIni > momentoInicio && eventoActualFecIni < momentoFin) {
        alert('c')

        let fechaAux = eventoActualFecIni;
        fechaAux.setMinutes(fechaAux.getMinutes() - 1);

        let evAux1 = {
          id: guid(),
          title: 'individual',
          start: momentoInicio,
          end: fechaAux
        }
        horarios.push(evAux1);
      }

    }
  }
  alert('return ' + horarios.length)
  return horarios;

}*/

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {

      eventos: [],
      reservas: [{ id: "" }],
      modalConfirmacionAbierto: false,
      mensajeConfirmacion: "",
      operacionActual: "",
      rangoSeleccionado: null
    }
    this.agregarReserva = this.agregarReserva.bind(this);
    this.editarReserva = this.editarReserva.bind(this);
    this.eliminarReserva = this.eliminarReserva.bind(this);
    this.seleccionarRango = this.seleccionarRango.bind(this);
  }

  agregarReserva() {
    let reservas = this.state.reservas;
    let eventos = this.state.eventos;

    let momentoInicio = moment(this.state.rangoSeleccionado.start);
    let momentoFin = moment(this.state.rangoSeleccionado.end);

    let fechaActual = new Date();

    // Primero, verifico que la selección sea después de la fecha actual
    if (momentoInicio.toDate() > fechaActual && momentoFin.toDate() > fechaActual) {

      if (estaDentroDeAlgunEvento(eventos, momentoInicio.toDate(), momentoFin.toDate())) {

        reservas[0] = {
          id: guid(),
          title: 'reserva',
          start: momentoInicio.toDate(),
          end: momentoFin.toDate(),
          allDay: false
        }

        // Llamada a un componente del padre
        if (this.props.establecerHorario) {

          this.props.establecerHorario(
            {
              inicio: momentoInicio.format('YYYY-MM-DD HH:mm:ss'),
              fin: momentoFin.format('YYYY-MM-DD HH:mm:ss')
            })
        }
        this.setState({
          reservas: reservas
        })

      } else {
        alert("Tu reserva debe estar dentro de uno de los horarios disponibles");

      }

    } else {
      alert("Debe seleccionar una reserva después de la fecha actual")
    }

  }

  editarReserva() {

  }

  eliminarReserva() {

  }
  seleccionarRango(slotInfo) {
    this.setState({
      modalConfirmacionAbierto: true, mensajeConfirmacion: "¿Agregar reserva?",
      operacionActual: "registro", rangoSeleccionado: slotInfo
    })
  }

  componentDidMount() {
    // Transformo los eventos al formato requerido
    let eventos = [];
    if (this.props.eventos) {

      for (var i = 0; i < this.props.eventos.length; i++) {

        let e = this.props.eventos[i];
        let momentoInicio = moment(e.fecIni).toDate();
        let momentoFin = moment(e.fecFin).toDate();
        if (e.idHor) {

          eventos.push({
              id: e.idHor,
              title: e.tipo,
              start: momentoInicio,
              end: momentoFin,
              allDay: false
            })
             
        }
      }
      // Y lo establezco como el estado
      this.setState({
        eventos: eventos
      })
    }


  }

  render() {
    return (
      <div id="mainArea" className="quickFade">
        <Row className="mt-4">
          <Col xs={12}>
            <div style={{ zIndex: '999999', position: 'relative' }}>
              <Calendar
                localizer={localizer}
                events={[...this.state.eventos, ...this.state.reservas]}
                defaultView='week'
                startAccessor="start"
                endAccessor="end"
                views={{
                  week: true
                }}
                selectable={this.props.seleccionable}
                step={30}
                onSelectSlot={this.seleccionarRango}
                showMultiDayTimes={true}
                eventPropGetter={(event, start, end, isSelected) => {
                  // Verifico si está en el arreglo de las reservas o eventos

                  if (event) {
                    if (event.id == this.state.reservas[0].id) {
                      // Pertenece a las reservas que marca el usuario
                      let style = {
                        backgroundColor: '#5286ff',
                        borderRadius: '5px',
                        opacity: 0.8,
                        color: 'black',
                        border: '0px',
                        display: 'block'
                      };
                      return {
                        style: style
                      };

                    } else {
                      // Pertenece a los eventos del profesor
                      let style = {
                        backgroundColor: '#52ff7a',
                        borderRadius: '0px',
                        opacity: 1,
                        color: 'black',
                        border: '0px',
                        display: 'block'
                      };
                      return {
                        style: style
                      };
                    }
                  }
                }}
              />

              <ModalConfirmacion encabezado={"¿Seguro?"} mensaje={this.state.mensajeConfirmacion}
                abierto={this.state.modalConfirmacionAbierto}
                cambiarEstadoModal={() => { this.setState({ modalConfirmacionAbierto: !this.state.modalConfirmacionAbierto }) }}
                confirmar={() => {
                  let operacionActual = this.state.operacionActual;

                  switch (operacionActual) {
                    case "registro":
                      this.agregarReserva();
                      break;
                    case "actualizacion":
                      this.editarReserva();
                      break;
                    case "eliminacion":
                      this.eliminarReserva();
                      break;
                  }
                  this.setState({
                    modalConfirmacionAbierto: !this.state.modalConfirmacionAbierto,
                    operacionActual: ""
                  })
                }}
                negar={() => {
                  this.setState({
                    modalConfirmacionAbierto: !this.state.modalConfirmacionAbierto,
                    operacionActual: ""
                  })
                }}
              />

            </div>
          </Col>
        </Row>
      </div>
    )



  }

}

export default Horario;