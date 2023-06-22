// import react
import React, {useContext} from 'react';

// context
import { cartContext } from '../context/cart.context';

// import resources
import { CartIconContainer, SvgIcon, CounterSpan } from '../styles/CartIcon.jsx';


// cart component
export default function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext)

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggleCart}>
            <SvgIcon className="shopping-icon" />
            <CounterSpan className='item-count'>{cartCount}</CounterSpan>
        </CartIconContainer>
    )
};