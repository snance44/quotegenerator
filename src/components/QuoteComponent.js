import React from "react";
import { QuoteCard } from "./QuoteCardComponent";
import { DISCOURAGEQUOTES } from "../shared/discourage";

export class Quote extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            discourageQuotes : DISCOURAGEQUOTES
        };
    }
    render() {
        return (
            <QuoteCard quotes={this.state.discourageQuotes}/>
        )
    }
}





