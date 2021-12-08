import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import Example from './car';

function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            
                <CardImg src={item.image} alt={item.name} />
                
            
        );

}

function Home(props) {
    return(
      <div className="container">
          <div class="row row-content align-items-center">
          <div class="col">
          <Example></Example>

          </div>
         


          </div>
              
             
        
              
          
           <div className="row justify-content-left"> 
           

           <div className="col-md">
               <h1>Best Health Packages</h1>
           </div>
           <div className="col col-lg-2">
           <a href="./menu" class="btn btn-info ">View All </a>
           </div>

           </div>
          <div className="row align-items-start">
             
                <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />

                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
               
            </div>
            
          <div>
      <img  src="../assets/images/banner.png" alt="banner"/>
       </div>
       <div>
      <img className ="img1" src="../assets/images/How it Works.png" alt="banner"/>
       </div>
       <div class="jumbotron jumbotron-fluid">
      <div class="container">
   
    <div className ="row">
    <div class="col-12 col-sm-6">
                    <h1>Excellence of Health Check</h1>
                    <p>Health Check is one of the most trusted  in diagnostics today, with a network of fully automated labs across major cities in India, that are hardcoded with innovative technology, advanced robotics and intelligent digital solutions.

With an extensive team of highly qualified lab technicians and pathologists, our single-minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform.!</p>
<a class="btn btn-warning btn-lg" href="./AboutUs" role="button">Know more</a>  
                
                </div>
    <img className="ml-auto" src="../assets/images/lab.jpg" alt="lab "/>

  
    
     </div>
    
    
     
     
  </div>
</div>
</div>
     
      
      
    );
}

export default Home;   