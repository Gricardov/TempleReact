import React, { Component } from 'react';
import {Col,Row} from 'reactstrap';

class Presentacion extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="mainArea" className="quickFade">
                <Row className="mt-4">
                        <Col xs={3} className="sectionTitle">
                            <h1>Personal Profile</h1>
                        </Col>

                        <Col xs={9} className="sectionContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                        </Col>
                </Row>

                <Row className="mt-4">
                    <Col xs={3} className="sectionTitle">
                        <h1>Work Experience</h1>
                    </Col>

                    <Col xs={9} className="sectionContent">
                        <article>
                            <h2>Job Title at Company</h2>
                            <p className="subDetails">April 2011 - Present</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                        </article>

                        <article>
                            <h2>Job Title at Company</h2>
                            <p className="subDetails">Janruary 2007 - March 2011</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                        </article>

                        <article>
                            <h2>Job Title at Company</h2>
                            <p className="subDetails">October 2004 - December 2006</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                        </article>
                    </Col>
                </Row>


                <Row className="mt-4">
                    <Col xs={3} className="sectionTitle">
                        <h1>Key Skills</h1>
                    </Col>

                    <Col xs={9} className="sectionContent">
                        <ul className="keySkills">
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                            <li>A Key Skill</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col xs={3} className="sectionTitle">
                        <h1>Education</h1>
                    </Col>

                    <Col xs={3} className="sectionContent">
                        <article>
                            <h2>College/University</h2>
                            <p className="subDetails">Qualification</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                        </article>

                        <article>
                            <h2>College/University</h2>
                            <p className="subDetails">Qualification</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                        </article>
                    </Col>
                </Row>

            </div>
        )
    }

}

export default Presentacion;


