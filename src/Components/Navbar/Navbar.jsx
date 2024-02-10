import React from 'react'
import "./Navbar.css"
import logo from '../../assets/resturantlogo.png'

function Navbar() {
    return (
        <div className='navbar-main'>

            <div className='navbar-main-heading'>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <h1>Food Freak</h1>
            </div>
            <div className='navbar-main-link'>
                <p>Home</p>
                <p>About</p>
                <p>Statistics</p>
                <p>Best seller</p>
            </div>


        </div>
    )
}

export default Navbar
