import React from 'react'
import "./Navbar.css"
import logo from '../../assets/gericht.png'
import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';

function Navbar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    return (
        <>
            <div className={open && screenWidth <=870 ? 'navbar-main-responsive' : 'navbar-main'}>

                <div className={open && screenWidth <=870  ? 'navbar-main-heading-responsive' : 'navbar-main-heading'}>
                    <div className='navbar-logo'>
                        <img src={logo} alt='logo' />
                    </div>

                </div>
                <div className={open && screenWidth <=870  ? 'navbar-main-link-responsive' : 'navbar-main-link'}>
                    <p><Link to='#home'>Home</Link></p>
                    <p><Link to='#about'>About</Link></p>
                    <p><Link to='#gallery'> Gallery </Link></p>
                    <p><Link to='#menu'>Menu</Link></p>
                    <p><Link to='#contact'>Contact</Link></p>
                    <p><Link to='#laurels'>Laurels</Link></p>
                    <p><Link to='#booking'>Book Table</Link></p>
                    {/* <div onClick={handleMenu}><HiOutlineX size={20}  className='nav-menu-icon' /> </div> */}
                </div>
            </div>

            <div className='nav-menu-icon-div' onClick={handleMenu}>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <div onClick={() => handleMenu}>
                    {open && screenWidth <=870  ? <HiOutlineX size={20} onClick={() => handleMenu} /> : <HiMenu size={30} onClick={() => handleMenu} />}
                </div>

            </div>
        </>

    )
}

export default Navbar
