import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { MenuItems } from "./MenuItems";



const Navbar = () => {

    return(
        <div>
            <nav className="navbar-items">
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>{item.page}</a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        </div>
    )
    


}

export default Navbar;