import React, { Component } from 'react';
import $ from 'jquery';
import './../../../compartido/fullcalendar.css';

class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.fullCalendarCargado = this.fullCalendarCargado.bind(this);
    }

    fullCalendarCargado() {
        
        $('#calendar').fullCalendar({

            defaultView: 'agendaWeek',
            slotEventOverlap: true,
            allDaySlot: false,
            allDayText: false,
            nowIndicator: true,
            selectable: true,
            selectHelper: true,
            header: {
                left: 'title',
                center: '',
                right: 'today prev,next'
            },
            titleFormat: 'D/MM/YYYY',
            buttonText: {
                today: 'Ir a hoy',
                month: 'Ver mes',
                week: 'Ver semana',
                day: 'Ver día',
                list: 'Lista'
            },
            eventBackgroundColor: 'blue',
            themeSystem: 'bootstrap4',
            contentHeight: '600',
            columnHeaderFormat: 'ddd M/D',
            validRange: function (nowDate) {
                return {
                    start: nowDate.clone().subtract(1, 'day'),
                    end: nowDate.clone().add(1, 'months')
                };
            },
            columnHeaderText: function (mom) {

                if (mom.weekday() === 1) {
                    return 'Lunes';
                }

                else if (mom.weekday() === 2) {
                    return 'Martes';
                }
                else if (mom.weekday() === 3) {
                    return 'Miércoles';
                }
                else if (mom.weekday() === 4) {
                    return 'Jueves';
                }
                else if (mom.weekday() === 5) {
                    return 'Viernes';
                }
                else if (mom.weekday() === 6) {
                    return 'Sábado';
                }
                else if (mom.weekday() === 0) {
                    return 'Domingo';
                }
                else {
                    return mom.format('LLL');
                }
            }, rendering: true,
            overlap: false,
            editable: true,
            startEditable: true,
            snapDuration: "00:01:00"


        });
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./../../../compartido/fullcalendar.js";
        script.async = true;
        script.onload = () => this.fullCalendarCargado();

        document.body.appendChild(script);

        //

    }

    render() {
        return (
            <div id="calendar" className="calendario"></div>
        )
    }

}

export default Horarios;