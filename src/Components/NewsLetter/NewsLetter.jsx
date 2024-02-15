import './NewsLetter.css'
import spoon from '../../assets/spoon.png'
import Heading from '../Heading/Heading'
import Btn from '../Btn/Btn'

export default function NewsLetter() {
    return (
        <div className='main-newsletter'>
            <div className='newsletter-cotainer'>
                <div>
                    <h4>Newsletter</h4>
                    <img src={spoon} alt='spoon' />
                    <Heading text='Subscribe To Our Newsletter' />
                    <p>And never miss any latest Updates</p>
                    <div className='newsletter-input-btn'>
                        <input type='email' placeholder='Email Address' />
                        <Btn text='Subscribe' />
                    </div>

                </div>
            </div>

        </div>
    )
}
