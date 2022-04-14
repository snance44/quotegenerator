import React from "react";
import { COURAGE } from "../shared/qCourage";
import { Quote } from "./QuoteComponent";

class Main extends React.Component{
  constructor(props) {
    super(props);
        this.state = {
            courageQuotes : COURAGE
        };
    }
    render() {
        return (
            <Quote quotes={this.state.courageQuotes} />
        )
    }
}

export default Main;