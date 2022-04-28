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
                            <Route path="/quotegenerator" element={<Home />} />
                            <Route path="/quotegenerator/discouragedquotes" element={<DiscouragedComponent/>} />
                            <Route path="/quotegenerator/angryquotes" element={<AngryComponent />} />
                            <Route path="/quotegenerator/disappointedquotes" element={<DisappointedComponent />} />
                            <Route path="/quotegenerator/joyfulquotes" element={<JoyfulComponent />} />
                            <Route path="/quotegenerator/fearfulquotes" element={<FearfulComponent />} />
                            <Route path="/quotegenerator/thoughtfulquotes" element={<ThoughtfulComponent />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;