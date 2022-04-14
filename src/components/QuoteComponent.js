import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';

export function Quote(props) {
    console.log(props);
    const quote = props.quotes[Math.floor(Math.random() * props.quotes.length)];
    return (
        <div className="container">
            <div className="row">
                <div className="col ml-2">
                    <Card body color="success" inverse key={quote.id}>
                        <CardBody>
                            <CardText>
                                <h3>{quote.text}</h3>
                                <h2>{quote.author}</h2>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        );
    
}
