import React, { Component } from 'react';
import Slider from "react-slick";
import { UserCard } from 'react-ui-cards';

require('../../../node_modules/slick-carousel/slick/slick.css');
require('../../../node_modules/slick-carousel/slick/slick-theme.css');

class Carrusel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
                <div>
                    <UserCard

                        header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
                        avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'
                        name="Mila Luna"
                        positionName="Profesor"
                        stats={[{ name: 'belleza', value: '10' }, { name: 'ternura', value: '5' }]}
                    />
                </div>
            </Slider>
        );
    }

}

export default Carrusel;