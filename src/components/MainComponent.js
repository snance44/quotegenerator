import React from "react";
import { DiscouragedComponent } from "./DiscouragedComponent";
import { AngryComponent } from './AngryComponent';
import { DisappointedComponent } from "./DisappointedComponent";
import { JoyfulComponent } from './JoyfulComponent';
import { FearfulComponent } from "./FearfulComponent";
import { ThoughtfulComponent } from "./ThoughtfulComponent";
import { Footer } from "./FooterComponent";
import Home from './HomeComponent'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';


class Main extends React.Component{
  
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/discouragedquotes" element={<DiscouragedComponent/>} />
                            <Route path="/angryquotes" element={<AngryComponent />} />
                            <Route path="/disappointedquotes" element={<DisappointedComponent />} />
                            <Route path="/joyfulquotes" element={<JoyfulComponent />} />
                            <Route path="/fearfulquotes" element={<FearfulComponent />} />
                            <Route path="/thoughtfulquotes" element={<ThoughtfulComponent />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;