// imports
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  position: fixed;
  top: -5px;
  left: 0;
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  z-index: 10;
  background: white;
`;

export const LogoContainer = styled(Link)`
  height: 50px;
  width: 50px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
`;