import React, { Component } from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import {  fetchDishes } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';



const mapStateToProps = state => {

    return{
        comments: state.comments,
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
    }
}
const mapDispatchToProps = dispatch => ({
  
    
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  });


class Main extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchDishes();
      }

    render() {

        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
                
            );
          }
      

        const AboutUsPage = () => {
            return(
                <About 
                    leaders={this.props.leaders}
                />
            );
        };


        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                  isLoading={this.props.dishes.isLoading}
                  errMess={this.props.dishes.errMess}
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                
                />
            );
          };



        return (
            <div>
                <Header></Header>
            
               
                    
                 
               
                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>

                    <Route path="/menu/:dishId" component={DishWithId} />

                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path="/aboutus" component={ AboutUsPage } />
                  
                   
                    {/* if url dosesnt match, bydefault redirect to */}
                    <Redirect to="/home" />
                </Switch>
               
           
                <Footer></Footer>
                

            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));