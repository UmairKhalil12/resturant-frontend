import React from 'react'
import './MenuItem.css'

export default function MenuItem({ title, price, tag }) {
    return (
        <div className='main-menuitem'>
            <div className='head-menuitem'>
                <div className='title-menuitem'>
                    <p className='menu-p-title'>{title}</p>
                </div>

                <div className='menuitem-line' />

                <div className='price-menuitem'>
                    <p className='menu-p'>{price}</p>
                </div>
            </div>

            <div className='tag-menuitem'>
                <p className='menu-p-tag'>{tag}</p>
            </div>

        </div>
    )
}
