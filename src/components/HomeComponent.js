import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Footer } from './FooterComponent';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
    }
    render() {
        return (
            <div className="container-fluid ">
                <div className='row m-md-5 centered'>
                    <div className='col text-light'>
                        <h1 className='text-center text-nowrap'>
                            I am feeling&nbsp;
                            <ButtonDropdown
                            
                                isOpen={this.state.dropdownOpen} toggle={this.toggle}
                            >
                    
                                <DropdownToggle caret>
                                    ...
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/disappointedquotes" >disappointed.</Link></h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/fearfulquotes" >fearful.</Link></h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/discouragedquotes" >discouraged.</Link></h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/angryquotes" >angry.</Link></h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/thoughtfulquotes" >thoughtful.</Link></h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2><Link className="unstyledlink" to="/joyfulquotes" >joyful.</Link></h2>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </h1>
                    </div>
                </div>
                <Footer />
            </div>
            
           
        
        )
    }
}
