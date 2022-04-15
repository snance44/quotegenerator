import React from "react";
import { DiscouragedComponent } from "./DiscouragedComponent";
import { AngryComponent } from './AngryComponent';
import Home from './HomeComponent'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';


class Main extends React.Component{
  
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/discouragedquotes" element={<DiscouragedComponent/>} />
                        <Route path="/angryquotes" element={<AngryComponent/>} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default Main;