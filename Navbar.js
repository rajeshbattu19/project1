import React, { Component } from 'react';
import './Navbar.css';
export class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className='container'>
                <div class="logo">
                <img src="/img-s/Veg Mawa logo.png" alt="logo"/>
                </div>
                <ul>
                <li>Home</li>
    <li>Shop</li>
    <li>Blog</li>
    <li>Contact</li>
                </ul>
                <button>
                    log in
                </button>
                </nav>
            </div>
        )
    }
}
export default Navbar;
