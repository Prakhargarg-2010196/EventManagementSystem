import './CardCarousel.css'

import {Container} from 'react-bootstrap'
import EventCard from './EventCard/EventCard';
import React from 'react';

const CardCarousel = () => {

    return (
        <Container className='d-flex mt-5 mb-5'>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    )
}
export default CardCarousel;