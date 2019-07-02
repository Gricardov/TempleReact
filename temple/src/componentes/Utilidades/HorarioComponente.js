import React, { Component } from "react";
import 'react-agenda/build/styles.css';
import 'react-datetime/css/react-datetime.css';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';
require('moment/locale/es.js');
let moment = require('moment');

let colorEvento = {
  'color-1':"rgb(61, 255, 142)",
  "color-2":"rgb(51, 129, 255)"
}

let colorSeleccionado = {
  "color-2":"rgb(51, 129, 255)"
}

// Le quito 5 horas porque estoy en UTC -5
let now = new Date();
now.setHours(now.getHours() - 5);

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      cellHeight: 40,
      showModal: false,
      locale: "es",
      rowsPerHour: 4,
      numberOfDays: 7,
      startDate: now,
      eventos: []
    }
    this.agregarEvento = this.agregarEvento.bind(this)
    this.editarEvento=this.editarEvento.bind(this)
    this.editarItem = this.editarItem.bind(this)
    this.seleccionarRango = this.seleccionarRango.bind(this)
    this.seleccionarCelda = this.seleccionarCelda.bind(this)
    this.cambiarDuracionEvento = this.cambiarDuracionEvento.bind(this)
    this.modificarEvento = this.modificarEvento.bind(this)
    this.removerItem = this.removerItem.bind(this)
    this.cerrarModal = this.cerrarModal.bind(this)
    this.abrirModal = this.abrirModal.bind(this)

  }
  agregarEvento (items , newItems){

    let eventos=[];
    eventos=this.state.eventos;
    // Le debes quitar 5 horas
    this.setState({showModal:false ,selected:[] , eventos: [...eventos,...items]});
    this.cerrarModal();
  }

  editarEvento (items , item){
    this.setState({showModal:false ,selected:[] , eventos:items});
    this.cerrarModal();
  }
  seleccionarRango(selected) {
    //alert(selected)
    this.setState({ selected: selected, showCtrl: true })
    this.abrirModal();
  }
  editarItem(item,openModal) {
    if (item && openModal === true) {
      this.setState({ selected: [item] })
      return this.abrirModal();
    }
  }
  seleccionarCelda(item, openModal) {
    if (this.state.selected && this.state.selected[0] === item) {
      return this.abrirModal();
    }
    this.setState({ selected: [item] })
  }
  cambiarDuracionEvento(items, item) {
    this.setState({ eventos: items })
  }
  modificarEvento(items, item) {
    this.setState({ eventos: items })
  }
  removerItem(items, item) {
    this.setState({ eventos: items });
  }

  abrirModal() {
    this.setState({
      showModal: true
    })
  }

  cerrarModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false })
  }

  componentDidMount() {
    // Transformo los eventos al formato requerido
    let eventos = [];
    if (this.props.eventos) {
         this.props.eventos.map((e, i) => {

        let momentoInicio = moment(e.fecIni);
        let momentoFin = moment(e.fecFin);

        let fechaIni = new Date(momentoInicio.year(), momentoInicio.month(), momentoInicio.day(), momentoInicio.hour(), momentoInicio.minute(), momentoInicio.second());
        let fechaFin = new Date(momentoFin.year(), momentoFin.month(), momentoFin.day(), momentoFin.hour(), momentoFin.minute(), momentoFin.second());
        eventos.push({
          _id: e.idHor,
          name: e.tipo,
          startDateTime: fechaIni,
          endDateTime: fechaFin,
          classes: 'color-1'
        })

        console.log(fechaIni + " " + fechaFin)
      })
    }

    // Y lo establezco como el estado
    this.setState({
      eventos: eventos
    })
  }

  render() {

    const detalleEvento = (props) => {
      return (<p>{props.item.name}</p>)
    }

    return (
      <>
        <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startAtTime={1}
          endAtTime={24}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.eventos}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colorEvento}
          itemComponent={detalleEvento}
          autoScale={false}
          helper={false}
          fixedHeader={false}
          onRangeSelection={this.seleccionarRango}
          onChangeEvent={this.modificarEvento}
          onChangeDuration={this.cambiarDuracionEvento}
          onItemEdit={this.editarItem}
          onCellSelect={this.seleccionarCelda}
          onItemRemove={this.removerItem}
        />

        {
          this.state.showModal
            ?
            <Modal clickOutside={this.cerrarModal} >
              <div className="modal-content">
                <ReactAgendaCtrl items={this.state.items} itemColors={colorSeleccionado}
                  selectedCells={this.state.selected} Addnew={this.agregarEvento} edit={this.editEvent} />

              </div>
            </Modal> : ''
        }
      </>
    )
  }

}

export default Horario;