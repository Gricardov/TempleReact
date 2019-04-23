import React, { Component } from 'react';

class PerfilProfesor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <figure class="profile-banner">
                    <img src="https://unsplash.it/975/300" alt="Profile banner" />
                </figure>
                <figure class="profile-picture"
                    style="background-image: url('http://unsplash.it/150/150')">
                </figure>
                <div class="profile-stats">
                    <ul>
                        <li>13    <span>Projects</span></li>
                        <li>1,354 <span>Commits</span></li>
                        <li>32    <span>Following</span></li>
                        <li>324   <span>Followers</span></li>
                    </ul>
                    <a href="javascript:void(0);" class="follow">
                        Follow Nick
    </a>
                </div>
                <h1>Nick Dobie <small>nrdobie</small></h1>
            </div>
        )
    }

}

export default PerfilProfesor;