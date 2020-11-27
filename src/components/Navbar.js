import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink activeStyle={{color: "red"}}>Wiki Countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}

 
export default Navbar;