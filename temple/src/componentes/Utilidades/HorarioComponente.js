import React, { Component } from "react";
import 'react-agenda/build/styles.css';
import 'react-datetime/css/react-datetime.css';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';
require('moment/locale/es.js');
let moment = require('moment');

let colors = {
  'color-1': "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)"
}

// Le quito 5 horas porque estoy en UTC -5
let now = new Date();
now.setHours( now.getHours() - 5 );

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      cellHeight: 30,
      showModal: false,
      locale: "es",
      rowsPerHour: 6,
      numberOfDays: 7,
      startDate: now,
      eventos: []
    }

    this.editarItem = this.editarItem.bind(this)
    this.seleccionarRango = this.seleccionarRango.bind(this)
    this.seleccionarCelda = this.seleccionarCelda.bind(this)
    this.cambiarDuracionEvento = this.cambiarDuracionEvento.bind(this)
    this.modificarEvento = this.modificarEvento.bind(this)
    this.removerItem = this.removerItem.bind(this)
    this.cerrarModal = this.cerrarModal.bind(this)
  }

  seleccionarRango(item) {
    console.log('handleCellSelection', item)
  }
  editarItem() {
    this.setState({
      showModal: true
    })
  }
  seleccionarCelda(item) {

  }
  cambiarDuracionEvento(item) {

  }
  modificarEvento(item) {

  }
  removerItem(item) {

  }
  cerrarModal() {
    this.setState({
      showModal: false
    })
  }

  componentDidMount(){
// Transformo los eventos al formato requerido
let eventos = [];
if (this.props.eventos) {
  /*[{
    _id            :guid(),
     name          : 'Meeting , dev staff!',
     startDateTime : new Date(2019,6,1,15,33,33),
     endDateTime   : new Date(2019,6,1,16,33,33),
     classes       : 'color-1 color-4'
   },
   {
    _id            :guid(),
     name          : 'Working lunch , Holly',
     startDateTime : new Date(2019,6,2,17,33,33),
     endDateTime   : new Date(2019,6,2,18,33,33),
     classes       : 'color-2'
   }]*/
   this.props.eventos.map((e, i) => {

    let momentoInicio=moment(e.fecIni);
    let momentoFin=moment(e.fecFin);

    let fechaIni=new Date(momentoInicio.year(), momentoInicio.month(), momentoInicio.day(), momentoInicio.hour(), momentoInicio.minute(), momentoInicio.second());
    let fechaFin=new Date(momentoFin.year(), momentoFin.month(), momentoFin.day(), momentoFin.hour(), momentoFin.minute(), momentoFin.second());
    eventos.push({
      _id: e.idHor,
      name: e.tipo,
      startDateTime: fechaIni,
      endDateTime: fechaFin,
      classes: 'color-1'
    })

    console.log(fechaIni+" "+fechaFin)
  })
}

// Y lo establezco como el estado
this.setState({
  eventos: eventos
})
  }

  render() {
    console.log(JSON.stringify(this.state.eventos))

    const detalleEvento=(props)=>{
      return (<p>{props.item.name}</p>)
    }

    return (
      <>
        <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.eventos}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          itemComponent={detalleEvento}
          autoScale={false}
          helper={true}
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
                <ReactAgendaCtrl items={this.state.items} itemColors={colors}
                  selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent} />

              </div>
            </Modal> : ''
        }
      </>
    )
  }

}

export default Horario;