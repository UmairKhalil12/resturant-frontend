import React from 'react'
import './Footer.css'
import NewsLetter from '../NewsLetter/NewsLetter'
import logo from '../../assets/gericht.png'
import spoon from '../../assets/spoon.png'
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs';
import bg from '../../assets/bg.png'

export default function Footer() {
  return (
    <div className='footer-newsletter-main' style={{ backgroundImage: `url(${bg})` }} >
      <NewsLetter />
      <div className='footer-main' c>
        <div className='footer-contactus'>
          <div>
            <h3>Contact Us</h3>
            <p>9 W 53rd St, New York , NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
        </div>

        <div className='footer-logo'>
          <div>
            <img src={logo} alt='logo' className='logo' />
            <p>"The best way to find yourself is to lose yourself in the service of others"</p>
            <img src={spoon} alt='spoon' />
            <div className='footer-logo-social-logo'>
              <BsFacebook size={20} color='gray' className='social-logo' />
              <BsInstagram size={20} color='gray' className='social-logo' />
              <BsTwitterX size={20} color='gray' className='social-logo' />
            </div>

          </div>

        </div>

        <div className='footer-workinglogo'>
          <div>
            <h3>Working Hours</h3>
            <p>Monday - Friday</p>
            <p>08:00am - 12:00am</p>

            <p>Saturday - Sunday</p>
            <p>07:00am - 11:00pm</p>
          </div>

        </div>
      </div>

      <p className='final-p'>2021 Gericht. All rights reserved</p>


    </div>
  )
}
