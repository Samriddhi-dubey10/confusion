import React, { Component } from 'react';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Example from './car';


  

class Header extends Component {
    constructor(props) {
        super(props);
       
        this.toggleNav = this.toggleNav.bind(this);
      
        this.state = {
         
          isNavOpen: false,
         
        };
      }
     

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
     
    render() {
        return(
            <div>
                <Navbar  dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="logo ml-6" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                        <h3 className= "heading mr-4"> Health Check </h3>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink  className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Health Packages </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <Button className ="buttonn"color="warning" href="#chatting">
                            <i class="fa fa-comments-o" aria-hidden="true">Chat With Us</i></Button>
                         
                            </Nav>
                      
                            
                        </Collapse>
                    </div>
                </Navbar>
               
                
                
            </div>
        );
    }
}

export default Header;