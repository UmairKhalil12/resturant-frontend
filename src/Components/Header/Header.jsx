import React from 'react'
import './Header.css'
import Heading from '../Heading/Heading'
import Btn from '../Btn/Btn'
import spoon from '../../assets/spoon.png'
import welcome from '../../assets/welcome.png'

function Header() {
  return (
    <div className='header-main' id='home'>

      <div className='header-content'>

        <div>

          <h4>Chase The New Flavour</h4>

          <img src={spoon} alt='spoon' />

          <Heading text='The Key to Fine Dinning' />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur possimus, assumenda quae molestiae laudantium autem.
            Soluta fugit quod dicta molestias voluptatibus at exercitationem quas eveniet
            laudantium odio, veniam, velit consectetur!</p>

          <Btn text='Order Now' />

        </div>

      </div>

      <div className='header-img' >
        <img src={welcome} alt='welcome' />
      </div>

    </div >
  )
}

export default Header
