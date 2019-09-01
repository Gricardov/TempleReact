import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
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
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'moment/locale/es-us';
import ModalConfirmacion from '../../Utilidades/ModalConfirmacion';
import ModalDetalleEvento from '../../Utilidades/ModalDetalleEvento';

let moment = require('moment');
const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const haySuperposicion = (id, eventos, inicio, fin) => {

  // Recorro todos los eventos
  for (var i = 0; i < eventos.length; i++) {
    // Para que haya superposición, algún tiempo de evento debe estar dentro de los límites de inicio y fin
    let e = eventos[i];
    // Ojo, no debe tomar en cuenta el evento que tiene el id suministrado
    if (e.id != id) {
      if (e.start >= inicio && e.start <= fin || e.end >= inicio && e.end <= fin) {
        return true;
      }
    }

  }
  return false;
}

const generarIdCorrelativo = (eventos) => {
  // Obtengo el mayor id
  let mayor = 0;
  for (var i = 0; i < eventos.length; i++) {
    let e = eventos[i];
    let numActual = parseInt(e.id);
    if (numActual > mayor) {
      mayor = numActual;
    }
  }
  return mayor + 1;
}

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventos: [],
      modalConfirmacionAbierto: false,
      modalDetalleAbierto: false,
      mensajeConfirmacion: "",
      operacionActual: "",
      rangoSeleccionado: null,
      eventoSeleccionado: null
    }
    this.agregarEvento = this.agregarEvento.bind(this);
    this.moverEvento = this.moverEvento.bind(this);
    this.redimensionarEvento = this.redimensionarEvento.bind(this);
    this.seleccionarRango = this.seleccionarRango.bind(this);
    this.seleccionarEvento = this.seleccionarEvento.bind(this);
    this.eliminarEvento = this.eliminarEvento.bind(this);
  }

  agregarEvento() {
    let eventos = this.state.eventos;

    let momentoInicio = moment(this.state.rangoSeleccionado.start);
    let momentoFin = moment(this.state.rangoSeleccionado.end);
    if (!haySuperposicion(null, eventos, momentoInicio.toDate(), momentoFin.toDate())) {

      eventos.push({
        id: generarIdCorrelativo(eventos),
        title: 'Clase libre',
        start: momentoInicio.toDate(),
        end: momentoFin.toDate(),
        allDay: false
      })

      this.setState({
        eventos: eventos
      })
    } else {
      alert('Hay superposición de horarios')
    }
  }

  eliminarEvento() {
    let eventos = this.state.eventos;
    let eventoSeleccionado = this.state.eventoSeleccionado;

    if (eventoSeleccionado.title !== 'reservado') {
      const idx = eventos.indexOf(eventoSeleccionado);
      eventos.splice(idx, 1);
      this.setState({
        eventos: eventos
      })

    } else {
      alert('No puede eliminar una reserva hecha por algún alumno')
    }

  }

  moverEvento({ event, start, end, isAllDay: droppedOnAllDaySlot }) {

    let eventos = this.state.eventos;
    // Itero y pregunto si existe algún evento con ese id (que no sea uno reservado)
    let evento = eventos.filter(e => e.id == event.id && e.title !== 'reservado')[0];
    // Si es que existe, que reemplace sus límites
    if (evento) {
      if (!haySuperposicion(evento.id, eventos, start, end)) {

        const idx = eventos.indexOf(event);
        evento.start = start
        evento.end = end
        eventos.splice(idx, 1, evento);
        this.setState({
          eventos: eventos
        })

      } else {
        alert('Hay superposición de horarios');

      }

    }

  }

  redimensionarEvento({ event, start, end }) {
    let eventos = this.state.eventos;

    // Itero y pregunto si existe algún evento con ese id (que no sea uno reservado)
    let evento = eventos.filter(e => e.id == event.id && e.title !== 'reservado')[0];
    // Si es que existe, que reemplace sus límites
    if (evento) {
      if (!haySuperposicion(evento.id, eventos, start, end)) {

        const idx = eventos.indexOf(event);
        evento.start = start
        evento.end = end
        eventos.splice(idx, 1, evento);
        this.setState({
          eventos: eventos
        })

      } else {
        alert('Hay superposición de horarios')

      }
    }
  }
  seleccionarRango(slotInfo) {
    this.props.establecerAgregandoHorario(true);
    this.setState({
      operacionActual: "registro", rangoSeleccionado: slotInfo
    })
  }

  seleccionarEvento(evento) {
    this.setState({
      modalConfirmacionAbierto: true, mensajeConfirmacion: "¿Eliminar evento?",
      operacionActual: "eliminacion", eventoSeleccionado: evento
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.agregandoHorario != this.props.agregandoHorario) {
      this.setState({
        modalDetalleAbierto: this.props.agregandoHorario,
        operacionActual: "registro", rangoSeleccionado: null
      })
    }
  }

  componentDidMount() {
    // Transformo los eventos al formato requerido
    let eventos = [];
    if (this.props.eventos) {

      this.props.eventos.map((e, i) => {

        let momentoInicio = new Date(e.fecIni);
        let momentoFin = new Date(e.fecFin);

        eventos.push({
          id: e.idHor || e.idCon,
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

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {

    const traducido = {
      allDay: 'Todo el día',
      previous: '<',
      next: '>',
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
      agenda: 'Agenda',
      date: 'Fecha',
      time: 'Hora',
      event: 'Evento',
      showMore: total => `+ Mostrar más: (${total})`
    };

    return (

      <div id="mainArea" className="quickFade">
        <Row className="mt-4">
          <Col xs={12}>
            <div style={{ overflow: 'auto', cursor: 'grab' }}>
              <DragAndDropCalendar
                messages={traducido}
                localizer={localizer}
                events={this.state.eventos}
                defaultView='week'
                startAccessor="start"
                endAccessor="end"
                views={{
                  week: true
                }}
                selectable={true}
                onEventDrop={this.moverEvento}
                resizable={true}
                onEventResize={this.redimensionarEvento}
                step={30}
                onSelectEvent={this.seleccionarEvento}
                onSelectSlot={this.seleccionarRango}
                showMultiDayTimes={true}
                eventPropGetter={(event, start, end, isSelected) => {

                  if (event) {

                    // Pertenece a los eventos del profesor
                    let style = {
                      backgroundColor: event.title == 'reservado' ? '#f57242' : '#52ff7a',
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
                }}
              />

              <ModalDetalleEvento abierto={this.state.modalDetalleAbierto} rangoSeleccionado={this.state.rangoSeleccionado}
                cerrar={() => { this.props.establecerAgregandoHorario(false) }}
                agregarEvento={(rangoSeleccionado) => {
                  this.setState({ rangoSeleccionado: rangoSeleccionado }, () => {
                    this.props.establecerAgregandoHorario(false);
                    this.agregarEvento();
                  });
                }}
              />

              <ModalConfirmacion encabezado={"¿Seguro?"} mensaje={this.state.mensajeConfirmacion}
                abierto={this.state.modalConfirmacionAbierto}
                cambiarEstadoModal={() => { this.setState({ modalConfirmacionAbierto: !this.state.modalConfirmacionAbierto }) }}
                confirmar={() => {
                  let operacionActual = this.state.operacionActual;

                  switch (operacionActual) {
                    case "registro":
                      this.agregarEvento();
                      break;
                    case "actualizacion":
                      this.editarEvento();
                      break;
                    case "eliminacion":
                      this.eliminarEvento();
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
        <Row className="mt-4">
          <Col xs={12}>
            <Button color="primary" block onClick={() => {
              let eventosFiltrados = this.state.eventos.filter(e => e.title !== 'reservado');

              // Formateo las fechass
              for (var i = 0; i < eventosFiltrados.length; i++) {
                eventosFiltrados[i].start = (moment(eventosFiltrados[i].start).format('YYYY-MM-DD HH:mm:ss'));
                eventosFiltrados[i].end = (moment(eventosFiltrados[i].end).format('YYYY-MM-DD HH:mm:ss'));
              }
              this.props.actualizarHorarios(eventosFiltrados);

            }
            }>
              Guardar cambios</Button>
          </Col>
        </Row>
      </div>
    )



  }

}

export default Horario;