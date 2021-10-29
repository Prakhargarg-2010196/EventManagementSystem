import {Card} from 'react-bootstrap'
import React from 'react';
import bogus from "../../../../../assets/bogus.jpg";

const EventCard = () => {

    return (
    <Card className='m-5'>
  <Card.Img src={bogus} className='w-100 ' variant="top"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    )
}
export default EventCard;