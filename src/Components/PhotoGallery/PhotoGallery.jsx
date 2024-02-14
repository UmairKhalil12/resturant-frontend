import './PhotoGallery.css'
import React, { useRef } from 'react'
import spoon from '../../assets/spoon.png'
import Heading from '../Heading/Heading'
import Btn from '../Btn/Btn'
import gallery1 from '../../assets/gallery01.png'
import gallery2 from '../../assets/gallery02.png'
import gallery3 from '../../assets/gallery03.png'
import gallery4 from '../../assets/gallery04.png'

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

export default function PhotoGallery() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const {current } = scrollRef;
        if(direction === 'left'){
            current.scrollleft -= 300;
        } else {
            current.scrollleft += 300; 
        }
        
    }

    const images =[gallery1 , gallery2 , gallery3 , gallery4]
    return (
        <div className='main-photogallery section_padding'>
            <div className='main-photogallery-content'>
                <h4>Instagram</h4>
                <img src={spoon} alt='spoon' />
                <Heading text='Photo Gallery' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam quidem commodi accusantium sed excepturi unde fugit
                    provident quia tempore dicta alias non doloremque,
                    recusandae iste itaque cumque laboriosam, cupiditate a.</p>

                <Btn text='View More' />
            </div>

            <div className='main-photogallery-img'>
                <BsArrowLeftShort  onClick={scroll('left')}/>
                {/* <img src={gallery1} alt='gallery' /> */}
                {images.map((image , index)=>{
                    
                })}
                <BsArrowRightShort onClick={scroll('right')} />
            </div>


        </div>
    )
}
