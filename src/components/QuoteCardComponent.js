import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';

export function QuoteCard(props) {
    console.log(props);
    const quote = props.quotes[Math.floor(Math.random() * props.quotes.length)];
    return (
        <CardBody key={quote.id}>
            <CardText>
                <h3>{quote.text}</h3>
                <h2>{quote.author}</h2>
            </CardText>
        </CardBody>
    );
}