import './Menu.css'
import '../../assets/spoon.png'
import Heading from '../Heading/Heading'
import spoon from '../../assets/spoon.png'
import menu from '../../assets/menu.png'
import wines from './data'
import MenuItem from '../MenuItem/MenuItem'


function Menu() {
    return (
        <div className='menu-container' id='menu'>
            <h4>Menu That Fit your Plates</h4>
            <img src={spoon} alt='spoon' />
            <Heading text='Todays Special ' />
            <div className='menu'>

                <div className='menu-child'>
                    <div>
                        <h2>Wine and Bear</h2>
                        <div className='inside-menu'>
                            <div className='inside-menu-1'>
                                {wines.wines.map((wines, key) => {
                                    return <MenuItem title={wines.title} price={wines.price} tag={wines.tags} key={key} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='menu-child' >
                    <img src={menu} alt='menu' />
                </div>

                <div className='menu-child'>
                    <div>
                        <h2>Cocktails</h2>
                        <div className='inside-menu'>
                            <div className='inside-menu-1'>
                                {wines.cocktails.map((wines, key) => {
                                    return <MenuItem title={wines.title} price={wines.price} tag={wines.tags} key={key} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Menu
