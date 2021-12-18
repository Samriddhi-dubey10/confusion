import React, { Component } from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class Booking extends Component {
 
    constructor(props){
      super(props);
      this.onChangeName= this.onChangeName.bind(this);
      this.onChangeEmail= this.onChangeEmail.bind(this);
      this.onChangePhone= this.onChangePhone.bind(this);
      this.onChangePassword= this.onChangePassword.bind(this);
      this.onChangePasswordconform= this.onChangePasswordconform.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
     
      this.state ={
        name: '',
        email:'',
        phone:'',
        password:'',
        passwordConform:'',
     
      }
    }
     
    onChangeName(e){
      this.setState({
        name:e.target.value
      });
    }
     
    onChangeEmail(e){
      this.setState({
        email:e.target.value
      });
    }
     
    onChangePhone(e){
      this.setState({
        phone:e.target.value
      });
    }
     
    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }
     
    onChangePasswordconform(e){
      this.setState({
        passwordConform:e.target.value
      });
    }
     
    onSubmit(e){
        e.preventDefault();
       
        if(this.state.password===this.state.passwordConform){
          const obj ={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password,
            passwordConform:this.state.passwordConform,
          };
         
          axios.post('http://localhost/reactProject/insert.php',obj)
          .then(res=> console.log(res.data))
          .catch(error => {
            console.log(error.response)
        });
       
      //To clear text box values 
        this.setState({
          name: '',
          email:'',
          phone:'',
          password:'',
          passwordConform:'',
       
        })
        }
       
        else{
          alert("Password mismatch")
        }
         
      }
      render(){
        return (
            <Form >
            <FormGroup>
                
                <Input Label="Full Name" value={this.state.name} onChange={this.onChangeName} />
            </FormGroup>
            <FormGroup>
                
                <Input Label="Email" value={this.state.email} onChange={this.onChangeEmail}  />
            </FormGroup>
            <FormGroup >
               
                    <Input Label="Phone Number" value={this.state.phone} onChange={this.onChangePhone} />
                   
              
            </FormGroup>
            <FormGroup >
               
            <Input Label="Password" 
               value={this.state.password} 
               onChange={this.onChangePassword}/>
                   
              
            </FormGroup>
            <FormGroup >
               
               
        <Input Label="Conform Password" 
               value={this.state.passwordConform} 
               onChange={this.onChangePasswordconform}/>
                      
                 
               </FormGroup>
            

               <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> Submit</Button>
        </Form>
        );
       }
    }

      export default Booking;