import React from 'react'
import './FindUs.css'
import Heading from '../Heading/Heading'
import Para from '../Para/Para'
import spoon from '../../assets/spoon.png'
import findus from '../../assets/findus.png'
import bg from '../../assets/bg.png'
import Btn from '../Btn/Btn'

export default function FindUs() {
    return (
        <div className='main-findus'  style={{ backgroundImage: `url(${bg})` }}>
            <div className='findus-content'>
                <div>
                    <h4>Contact Us</h4>
                    <img src={spoon} alt='spoon' />
                    <Heading text='Find Us' />
                    <p>Lane End Bungalow , Whatcroft Lane , Rudheath , CW9 75G </p>
                    <Para text = 'Opening Hours' />
                    <p>Mon - Fri 10:00am - 02:00am</p>
                    <p>Sat-Sun 10:00am - 3:00am</p>
                    <Btn text='View Us' />
                </div>

            </div>

            <div className='findus-img'>
                <img src={findus} alt='' />
            </div>

        </div>
    )
}
