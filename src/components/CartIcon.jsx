// import react
import React, {useContext} from 'react';

// context
import { cartContext } from '../context/cart.context';

// import styles
import '../styles/CartIcon.css';

// // import resources
import ShoppingCartIcon from '../assets/shopping-bag.svg';

// cart component
export default function CartIcon() {

    const { isCartOpen, setIsCartOpen } = useContext(cartContext)

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container'>
            <img onClick={toggleCart} width={'33px'} height={'33px'} style={{
                position: 'relative',
                cursor: 'pointer'
            }} src={ShoppingCartIcon} className='shopping-icon' alt='icon' />
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