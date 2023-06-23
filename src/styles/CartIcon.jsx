// imports
import styled from "styled-components";
import {ReactComponent as ShoppingCartIcon} from '../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const SvgIcon = styled(ShoppingCartIcon)`
    width: 33px;
    height: 33px;
    position: relative;
    cursor: pointer
`;

export const CounterSpan = styled.span`
    position: 'absolute',
    top: '19px',
    right: '53px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    cursor: 'pointer'
`;
