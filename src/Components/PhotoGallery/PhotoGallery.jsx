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
        const current = scrollRef.current;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }

    }

    const images = [gallery1, gallery2, gallery3, gallery4]
    return (
        <div className='main-photogallery ' id='gallery'>
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

            <div className='gallery-images' >
            <BsArrowLeftShort size={30} onClick={() => scroll('left')} className='arrow-icons' />
                <div className='gallery-images-container' ref={scrollRef}>
                    {images.map((image, index) => {
                        return (
                            <div className='gallery-image-card' key={index}>
                                <img src={image} alt='gallery' />
                                <BsInstagram className='instagram-icon' />
                            </div>
                        )
                    })}
                </div>
                <BsArrowRightShort size={30} onClick={() => scroll('right')} className='arrow-icons' />
            </div>
        </div>
    )
}
