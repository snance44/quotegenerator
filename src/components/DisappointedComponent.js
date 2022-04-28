import React from 'react';
import { QuoteCard } from "./QuoteCardComponent";
import { Card , Button } from 'reactstrap';
import { DISAPPOINTEDQUOTES } from "../shared/disappointed";
import { Link } from 'react-router-dom';

export class DisappointedComponent extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            disappointedQuotes : DISAPPOINTEDQUOTES
        };
    }
    render() {
        return (
            <div className="container p-5">
                <div className="row m-md-5 p-3">
                    <div className="col-6-auto p5">
                        <Card body className='disappointed shadow-lg'>
                            <QuoteCard quotes={this.state.disappointedQuotes} />
                            <div className='row'>
                                <div className='col'>
                                    <Link to="/"><Button size="lg" className="m-3 buttonnav">Generate a different type of quote</Button></Link>
                                    <Link to="/disappointedquotes" onClick={this.forceUpdate}><Button size="lg" className="m-3 buttonnav">I'd like another one like this</Button></Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
