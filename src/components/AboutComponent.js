import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <div class="jumbotron jumbotron-fluid ">
      <div class="container">
   
    <div className ="row">
    <div class="col-12 col-sm-6">
                    <h1>Excellence of Health Check</h1>
                    <p>Health Check is one of the most trusted  in diagnostics today, with a network of fully automated labs across major cities in India, that are hardcoded with innovative technology, advanced robotics and intelligent digital solutions.

With an extensive team of highly qualified lab technicians and pathologists, our single-minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform.!</p>

                
                </div>
    <img className="ml-auto" src="../assets/images/lab.jpg" alt="lab "/>

  
    
     </div>
    
    
     
     
  </div>
</div>
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
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="row ">
                <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="../assets/images/lab.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/images/lab.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top " src="../assets/images/lab.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>


            
        </div>
    );
}

export default About;    