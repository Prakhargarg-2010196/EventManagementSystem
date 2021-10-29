import './CardCarousel.css'

import {Container} from 'react-bootstrap'
import EventCard from './EventCard/EventCard';
import React from 'react';

const CardCarousel = () => {

    return (
        <Container className='d-flex mt-4 mb-4'>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    )
}
export default CardCarousel;