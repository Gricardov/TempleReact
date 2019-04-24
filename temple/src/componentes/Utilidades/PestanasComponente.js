import React, { Component } from 'react';

class Pestana extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <ul id="tabs-list">
                    <label id="open-nav-label" for="nav-ctrl"></label>
                    <li id="li-for-panel-1">
                        <label class="panel-label"
                            for="panel-1-ctrl">Sobre mí</label>
                    </li>
                    <li id="li-for-panel-2">
                        <label class="panel-label"
                            for="panel-2-ctrl">Cursos</label>
                    </li>
                    <li id="li-for-panel-3">
                        <label class="panel-label"
                            for="panel-3-ctrl">Horarios</label>
                    </li>
                    <li id="li-for-panel-4">
                        <label class="panel-label"
                            for="panel-4-ctrl">Ubicación</label>
                    </li>
                </ul>

            </>
        )
    }

}

export default Pestana;