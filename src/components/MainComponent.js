import React from "react";
import { COURAGE } from "../shared/qCourage";
import { Quote } from "./QuoteComponent";
import Home from './HomeComponent'


class Main extends React.Component{
  constructor(props) {
    super(props);
        this.state = {
            courageQuotes : COURAGE
        };
    }
    render() {
        return (
            <Home />
            //<Quote quotes={this.state.courageQuotes} />
        )
    }
}

export default Main;