import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonial';

function RenderLeader({ leader }) {
    return(
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    );
}


function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader} />            
        );
    });

    return (
        <div className="container">
           
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Our Excellence</h2>
                    <p>Healthcheck is one of the most trusted players in diagnostics today, with a network of fully automated labs across major cities in India, that are hard coded with innovative technology, advanced robotics and intelligent digital solutions. With an extensive team of highly qualified lab technicians and pathologists, our single minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform.</p>
                  
                </div>
                <div className="row ">
                <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="../assets/images/doctor1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Dr. Sonali</h5>
      <p class="card-text">

Dr. Sonali Solanki is an MD in Pathology. She has a diverse experience of working in reputed hospitals as well as for medical affairs in the IVD industry. She has a sound academic record and has been a university topper (Gold Medalist). She has worked closely with numerous hospitals and labs for their quality assessment and improvement, worked with various hospitals and labs in preparation for accreditations from NABL, ISO and CAP (College of American Pathologists). She has conducted training programs across the country for endorsement of best practices especially in the field of pre-analytical improvement.</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/images/doctor3.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Dr.Sneha Verma</h5>
      <p class="card-text">Dr. Sneha Verma, a qualified MD Pathologist heads the lab operations at Health Check. With the diverse experience of more than 20+ years, she has a deep understanding of lab operations with a strong application of quality assurance practices in all aspects of the lab operations. Trained as an internal auditor in ISO 15189, she has been instrumental in getting NABL accreditation, CAP accreditation, ISO certification & setting up the lab as a 24x7 single unit from inception and had enabled expansion to a chain of more than 30 labs catering to samples from across India as well as from international centres in Africa and Nepal..</p>
    </div>
   
  </div>
 
</div>
                </div>
               
            </div>

         
        <div>
            <Testimonials></Testimonials>
        </div>

    
            
        </div>
    );
}

export default About;    