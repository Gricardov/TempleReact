import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import $ from 'jquery';

class Asistente extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        $(function(){
            $(".panel.panel-chat > .panel-heading > .chatMinimize").click(function(){
                if($(this).parent().parent().hasClass('mini'))
                {
                    $(this).parent().parent().removeClass('mini').addClass('normal');

                    $('.panel.panel-chat > .panel-body').animate({height: "250px"}, 500).show();

                    $('.panel.panel-chat > .panel-footer').animate({height: "75px"}, 500).show();
                }
                else
                {
                    $(this).parent().parent().removeClass('normal').addClass('mini');

                    $('.panel.panel-chat > .panel-body').animate({height: "0"}, 500);

                    $('.panel.panel-chat > .panel-footer').animate({height: "0"}, 500);

                    setTimeout(function() {
                        $('.panel.panel-chat > .panel-body').hide();
                        $('.panel.panel-chat > .panel-footer').hide();
                    }, 500);


                }

            });
            $(".panel.panel-chat > .panel-heading > .chatClose").click(function(){
                $(this).parent().parent().remove();
            });
        })
    }

    render() {
        return (
            <Row>
                <div className="panel panel-chat">
                    <div className="panel-heading">
                        <a href="#" className="chatMinimize"><span>Asistente virtual</span></a>
                        <a href="#" className="chatClose"><i className="glyphicon glyphicon-remove"></i></a>
                        <div className="clearFix"></div>
                    </div>
                    <div className="panel-body">
                        <div className="messageMe">
                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" alt="" />
                            <span>Hola! Soy tu asistente ¿En qué te puedo ayudar?</span>
                            <div className="clearFix"></div>
                        </div>
                        <div className="messageHer">
                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" alt="" />
                            <span>Quiero saber más...</span>
                            <div className="clearFix"></div>
                        </div>
                        
                        <div className="clearFix"></div>
                    </div>
                    <div className="panel-footer">
                        <textarea name="textMessage" cols="0" rows="0"></textarea>
                    </div>
                </div>
            </Row>
        )
    }

}

export default Asistente;