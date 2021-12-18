import React, { Component } from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class Booking extends Component {
 
    constructor(props){
      super(props);
      this.onChangeName= this.onChangeName.bind(this);
      this.onChangeEmail= this.onChangeEmail.bind(this);
      this.onChangePhone= this.onChangePhone.bind(this);
      this.onChangeHealthPackage= this.onChangeHealthPackage.bind(this);
      this.onChangeHealthPackageconform= this.onChangeHealthPackageconform.bind(this);
      this.onChangeAddress= this.onChangeAddress.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
     
      this.state ={
        name: '',
        email:'',
        phone:'',
        healthpackage:'',
        healthpackageConform:'',
        address:'',
     
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
     
    onChangeHealthPackage(e){
      this.setState({
        healthpackage:e.target.value
      });
    }
     
    onChangeHealthPackageconform(e){
      this.setState({
        healthpackageConform:e.target.value
      });
    }
    onChangeAddress(e){
      this.setState({
        address:e.target.value
      });
    }
     
    onSubmit(e){
        e.preventDefault();
       
        if(this.state.password===this.state.passwordConform){
          const obj ={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            healthpackage:this.state.healthpackage,
            healthpackageConform:this.state.healthpackageConform,
            address:this.state.address
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
          healthpackage:'',
          healthpackageConform:'',
          address:'',
       
        })
        }
       
        else{
          alert("Healthpackage mismatch")
        }
         
      }
      render(){
        return (
            <Form >
            <FormGroup>
            <Label htmlFor="booking" md={12} > Name</Label>
                
                <Input Label="Full Name" value={this.state.name} onChange={this.onChangeName} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="booking" md={12} > Email</Label>
                
                <Input Label="Email" value={this.state.email} onChange={this.onChangeEmail}  />
            </FormGroup>
            <FormGroup >
            <Label htmlFor="booking" md={12} > Phone</Label>
                    <Input Label="Phone Number" value={this.state.phone} onChange={this.onChangePhone} />
                   
              
            </FormGroup>
            <FormGroup >
            <Label htmlFor="booking" md={12} > HealthPackage</Label>  
            <Input Label="HealthPackage" 
               value={this.state.healthpackage} 
               onChange={this.onChangeHealthPackage}/>
                   
              
            </FormGroup>
            <FormGroup >
               
            <Label htmlFor="booking" md={12} > Confirm HealthPackage</Label>
        <Input Label="Confirm HealthPackage" 
               value={this.state.healthpackageConform} 
               onChange={this.onChangeHealthPackageconform}/>
                      
                 
               </FormGroup>
               <FormGroup>
               <Label htmlFor="booking" md={12} > Address</Label>
               <Input Label="Address" 
               value={this.state.address} 
               onChange={this.onChangeAddress}/>
                      
                 
               </FormGroup>
            

               <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> Submit</Button>
        </Form>
        );
       }
    }

      export default Booking;