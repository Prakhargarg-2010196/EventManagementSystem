import { Button, Card } from "react-bootstrap"

import React from "react"
import styles from "./EventCards.module.css"

export const EventCards = (props)=>{


    return (

        <Card className={styles.Card} key="{props.i}">
            <Card.Img variant="top" src={props.img.src} />
            <Card.Body>
                <Card.Title>{props.cardDetails.title}</Card.Title>
                <Card.Text>
                    {props.cardDetails.text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}