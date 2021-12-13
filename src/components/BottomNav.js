import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';


import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Example from './car';

  

class Bottom extends Component {
    constructor(props) {
        super(props);
       
        this.toggleNav = this.toggleNav.bind(this);
        this.toggle = this.toggle.bind(this);
      
        this.state = {
         
          isNavOpen: false,
          tooltipOpen: false
          
        };
      }
     

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
         
        });
      }
      
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
      
    render() {
        return(
            <div>
                <Navbar  light expand=" md" fixed ="bottom" >
                    <div className="container">
                    <NavbarBrand className="chat  mr-auto" href="/" id ="TooltipExample"><img src='assets/images/chat1.png' height="100" width="100" alt='logo' /></NavbarBrand>
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                        Chat With Us
                       
                        </Tooltip>
                        
                    </div>
                </Navbar>
               
            
                
            </div>
        );
    }
}

export default Bottom;