import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from "reactstrap";
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';


    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card className =" card text-center">
                <Link to={ `/menu/${dish.id}` } >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <a href="#" class="btn btn-info ">Know More </a>
                </Link>
            </Card>   
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <RenderMenuItem dish={dish}  />
                </div>
            );
        });
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Health Packages
                        </BreadcrumbItem>
                    </Breadcrumb>
                    
                    <div className="col-12">
                        <h3>Health Packages</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    { menu }
                </div>
            </div>
        );

    }
    




export default Menu;