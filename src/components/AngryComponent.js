import React from 'react';
import { QuoteCard } from "./QuoteCardComponent";
import { Card , Button } from 'reactstrap';
import { ANGRYQUOTES } from "../shared/angry";
import { Link } from 'react-router-dom';

function refreshPage() {
    window.location.reload(false);
  }

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
                <div className="row m-md-5 p-3">
                    <div className="col-6-auto p5">
                        <Card body className='angry shadow-lg'>
                            <QuoteCard quotes={this.state.angryQuotes} />
                            <div className='row'>
                                <div className='col'>
                                    <Link to="/quotegenerator"><Button size="lg" className="m-3 buttonnav">Generate a different type of quote</Button></Link>
                                    <Link to="/quotegenerator/angryquotes" onClick={refreshPage}><Button size="lg" className="m-3 buttonnav">I'd like another one like this</Button></Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
