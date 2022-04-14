import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';

export function Quote(props) {
    console.log(props);
    const quote = props.quotes.map(quote => {
        return (
            <Card body color="success" inverse key={quote.id}>
                <CardBody>
                    <CardText>
                        <h3>{quote.text}</h3>
                        <p>{quote.author}</p>
                    </CardText>
                </CardBody>
            </Card>
        );
    })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {quote}
                    </div>
                </div>
            </div>
        );
}
