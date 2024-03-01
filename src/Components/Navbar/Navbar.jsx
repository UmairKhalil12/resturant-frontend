import React from 'react'
import "./Navbar.css"
import logo from '../../assets/gericht.png'
import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={open ? 'navbar-main-responsive' : 'navbar-main'}>

                <div className={open ? 'navbar-main-heading-responsive' : 'navbar-main-heading'}>
                    <div className='navbar-logo'>
                        <img src={logo} alt='logo' />
                    </div>

                </div>
                <div className={open ? 'navbar-main-link-responsive' : 'navbar-main-link'}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Statistics</p>
                    <p>Best seller</p>
                </div>
            </div>

            <div className='nav-menu-icon-div' onClick={handleMenu}>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <div onClick={()=>handleMenu}>
                    {open ? <HiOutlineX size={20} onClick={()=>handleMenu}  /> : <HiMenu size={30} onClick={()=>handleMenu} />}
                </div>

            </div>
        </>

    )
}

export default Navbar
