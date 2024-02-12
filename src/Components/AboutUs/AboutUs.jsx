import './AboutUs.css'
import bg from '../../assets/bg.png'
import Heading from '../Heading/Heading'
import knife from '../../assets/knife.png'
import spoon from '../../assets/spoon.png'
import Btn from '../Btn/Btn'

export default function AboutUs() {
    return (
        <div className='about-main section_padding' style={{ backgroundImage: `url(${bg})` }}>
        
            <div className='about'>
                <div>
                    <Heading text='About' />
                    <img src={spoon} alt='spoon' />
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quibusdam molestiae vel amet eius pariatur,
                        cumque facere accusantium aperiam fuga? Velit,
                        ab similique! Officia voluptatibus tenetur
                        dolor quisquam! Distinctio, quia. Ad!
                    </p>
                    <Btn text='View More' />
                </div>
            </div>

            <div className='knife' >
                <img src={knife} alt='knife'  />
            </div>

            {/* <div  className='G-div' >
            <img src={G} alt='knife'  />
            </div> */}

            <div className='history'>
                <div>
                    <Heading text='History' />
                    <img src={spoon} alt='spoon' />
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quibusdam molestiae vel amet eius pariatur,
                        cumque facere accusantium aperiam fuga? Velit,
                        ab similique! Officia voluptatibus tenetur
                        dolor quisquam! Distinctio, quia. Ad!
                    </p>
                    <Btn text='View More' />
                </div>
            </div>
        </div>

    )

}