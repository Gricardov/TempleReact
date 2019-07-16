import React, { Component } from "react";
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
} from 'react-big-calendar'
import { guid } from 'react-agenda';
import 'moment/locale/es-us';
import ModalConfirmacion from '../Utilidades/ModalConfirmacion';

let moment = require('moment');
const localizer = momentLocalizer(moment);

/*const obtenerFechaLocal = (moment) => {
  let date = new Date(moment.year(), moment.month(), moment.day(),
    moment.hour(), moment.minute(), moment.second());
  date.setDate(date.getDate() + 6);
  date.setHours(date.getHours() + 19)
  return date;
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

    let momentoInicio = moment(this.state.rangoSeleccionado.start);
    let momentoFin = moment(this.state.rangoSeleccionado.end);

    reservas[0] = {
      id: guid(),
      title: 'reserva',
      start: momentoInicio.toDate(),
      end: momentoFin.toDate(),
      allDay: false
    }

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
      this.props.eventos.map((e, i) => {

        let momentoInicio = moment(e.fecIni).toDate();
        let momentoFin = moment(e.fecFin).toDate();

        eventos.push({
          id: e.idHor,
          title: e.tipo,
          start: momentoInicio,
          end: momentoFin,
          allDay: false
        })

      })
    }

    // Y lo establezco como el estado
    this.setState({
      eventos: eventos
    })
  }

  render() {
    return (
      <div style={{ zIndex: '999999', position: 'relative' }}>
        <Calendar
          localizer={localizer}
          events={[...this.state.eventos, ...this.state.reservas]}
          defaultView={'week'}
          startAccessor="start"
          endAccessor="end"
          views={{
            week: true
          }}
          selectable={true}
          step={30}
          onSelectSlot={this.seleccionarRango}
          showMultiDayTimes={true}
          eventPropGetter={(event, start, end, isSelected) => {
            // Verifico si está en el arreglo de las reservas o eventos

            if (event) {
              if (event.id == this.state.reservas[0].id) {
                // Pertenece a las reservas del usuario
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
    )
  }

}

export default Horario;