import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './../../../compartido/fullcalendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diasSemana: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
        };
    }

    render() {

        return (
            <div id="mainArea" className="quickFade">
                <Row className="mt-4">
                    <Col xs={12}>
                        <FullCalendar
                            defaultView="dayGridWeek"
                            slotEventOverlap={true}
                            allDaySlot={false}
                            allDayText={false}
                            nowIndicator={true}
                            selectable={true}
                            selectHelper={true}
                            header={
                                {
                                    left: 'title',
                                    center: '',
                                    right: 'today prev,next'
                                }
                            }
                            plugins={[dayGridPlugin]}
                            weekends={true}
                            buttonText={{
                                today: 'Ir a hoy',
                                month: 'Ver mes',
                                week: 'Ver semana',
                                day: 'Ver día',
                                list: 'Lista'
                            }}
                            eventBackgroundColor='blue'
                            themeSystem='bootstrap4'
                            contentHeight='600'
                            validRange={(fecha) => {
                                return {
                                    start: fecha,
                                    end: fecha + 7
                                }
                            }}
                            columnHeaderText={(mom) => {

                                return this.state.diasSemana[mom.getDay()]

                            }}
                            events={this.props.eventos}



                        />
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Horarios;