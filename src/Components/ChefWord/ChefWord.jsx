import './ChefWord.css'
import chef from '../../assets/chef.png'
import spoon from '../../assets/spoon.png'
import quote from '../../assets/quote.png'
import Heading from '../Heading/Heading'
import Para from '../Para/Para'
import signature from '../../assets/sign.png'
import bg from '../../assets/bg.png'

function ChefWord() {
    return (
        <div className='main-chefword' style={{ backgroundImage: `url(${bg})` }}>
            <div className='img-chef'>
                <img src={chef} alt='chef' />
            </div>

            <div className='content-chefword'>
                <div>
                    <h4>Chef's Word</h4>
                    <img src={spoon} alt='spoon' />
                    <Heading text='What We Beleive in' />

                    <img src={quote} alt='quote' className='quote-img' />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Possimus deserunt blanditiis magni aperiam ducimus laudantium
                        nesciunt voluptatum! Minus tenetur, dolorem, magnam fuga vitae earum vel ipsum quia dicta rem vero?
                    </p>

                    < Para text='Kewin Lowo' />
                    <p style={{ color: 'var(--color-text3)' }}>chef & co-founder</p>
                    <img src={signature} alt='sign' className='signature' />
                </div>
            </div>
        </div>
    )
}

export default ChefWord
