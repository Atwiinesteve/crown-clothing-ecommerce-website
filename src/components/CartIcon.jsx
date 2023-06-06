// import react
import React from 'react';

// import styles
import '../styles/CartIcon.css';

// // import resources
import ShoppingCartIcon from '../assets/shopping-bag.svg';

// cart component
export default function CartIcon() {
    return(
        <div classname='cart-icon-container'>
            <img width={'33px'} height={'33px'} style={{
                position: 'relative',
                cursor: 'pointer'
            }} src={ShoppingCartIcon} classname='shopping-icon' />
            <span style={{
                position: 'absolute',
                top: '19px',
                right: '53px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                cursor: 'pointer'
            }} className='item-count'>0</span>
        </div>
    )
};