import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <div className="container-fluid">
            <div className='row m-5 centered'>
                <div className='col text-light'>
                    <h1>I am feeling&nbsp;
                
                        <ButtonDropdown
                            
                                isOpen toggle={function noRefCheck(){}}
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
        </div>

           
        
    )
}

export default Home;