import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


function Home(props) {
    return (
        <div className="containe-fluid centered">
            <div className='row m-5'>
                <div className='col text-light'>
                    <h1>I am feeling&nbsp;
                
                        <ButtonDropdown
                                isOpen
                                toggle={function noRefCheck(){}}
                            >
                    
                            <DropdownToggle caret>
                            ...
                            </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <h2>disappointed.</h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2>fearful.</h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2>sad.</h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2>angry.</h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2>thoughtful.</h2>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h2>joyful.</h2>
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