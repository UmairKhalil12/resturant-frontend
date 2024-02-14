import React from 'react'
import './Laurels.css'
import bg from '../../assets/bg.png'
import Heading from '../Heading/Heading'
import spoon from '../../assets/spoon.png'
import award2 from '../../assets/award02.png'
import award1 from '../../assets/award01.png'
import award5 from '../../assets/award05.png'
import award3 from '../../assets/award03.png'
import Para from '../Para/Para'
import laurels from '../../assets/laurels.png'

export default function Laurels() {
    return (
        <div className='laurels-main' style={{ backgroundImage: `url(${bg})` }}>
            <div className='laurels-content'>
                <div>
                    <p>Our Awards and Recognition</p>
                    <img src={spoon} alt='spoon' />
                    <Heading text='Our Laurels' />
                </div>
                <div className='laurels-awards'>
                    <div className='laurels-awards-1'>
                        
                        <div className='award-img-div'>
                            <img src={award2} alt='award02' />
                        </div>

                        <div>
                            <Para text='Rising Star' />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>

                        <div className='award-img-div'>
                            <img src={award1} alt='award01' />
                        </div>

                        <div>
                            <Para text='Rising Star' />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>

                    </div>

                    <div className='laurels-awards-2'>
                        <div className='award-img-div'>
                            <img src={award5} alt='award05' />
                        </div>

                        <div>
                            <Para text='Rising Star' />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>

                        <div className='award-img-div' >
                            <img src={award3} alt='award03' />
                        </div>

                        <div>
                            <Para text='Rising Star' />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='laurels-image'>
                <img src={laurels} alt='laurels' />
            </div>

        </div>
    )
}
