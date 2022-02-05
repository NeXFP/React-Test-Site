import React from 'react';
import {SiAffinitydesigner} from 'react-icons/si'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Galleria</NavLogo>
          <MobileIcon>
            <SiAffinitydesigner />
          </MobileIcon>  
          <NavMenu>
              <NavItem>
                  <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='works'>Works</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='signup'>Sign Up</NavLinks>
              </NavItem> 
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/signin'> Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
 );
}

export default Navbar;
