import React from 'react';
import { QuoteCard } from "./QuoteCardComponent";
import { Card , Button } from 'reactstrap';
import { ANGRYQUOTES } from "../shared/angry";
import { Link } from 'react-router-dom';

export class AngryComponent extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            angryQuotes : ANGRYQUOTES
        };
    }
    render() {
        return (
            <div className="container p-5">
                <div className="row m-5 p-3">
                    <div className="col-6-auto p5">
                        <Card body className='angry'>
                            <QuoteCard quotes={this.state.angryQuotes} />
                            <div className='row'>
                                <div className='col'>
                                    <Link to="/home"><Button size="lg" className="m-3 buttonnav">Generate a different type of quote</Button></Link>
                                    <Link to="/angryquotes" onClick={this.forceUpdate}><Button size="lg" className="m-3 buttonnav">I'd like another one like this</Button></Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
