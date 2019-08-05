import React, { Component } from 'react';
import 'tachyons';
import '../services/styles.css';
import 'redux';
import { connect } from 'react-redux';
import { store } from '../index.js';
import Navigation from '../components/Navigation.js';
import SignUp from '../components/SignUp.js';
import LogIn from '../components/LogIn.js';
import Hero from '../components/Hero.js';
import HeroSearch from '../components/HeroSearch.js';
import CenterSection from '../components/CenterSection.js';
import HikesNearYouList from '../components/HikesNearYouList.js';
import RecommendedHikesList from '../components/RecommendedHikesList.js';
import Map from '../components/Map.js';
import LowerMainPageContent from '../components/LowerMainPageContent.js';
import GearReviews from '../components/GearReviews.js';
import MainPageArticles from '../components/MainPageArticles.js';
import Footer from '../components/Footer.js';
import { 
  showText, 
  displaySignUpModalAction,
  displayLogInModalAction,
  submitSearchFieldAction,
  sendSearchFieldAction,
  submitEmailAction,
  submitCryptedPasswordAction,
  submitNameAction,
  sendSignUpAction,
  sendLogIn,
} from '../services/actions.js';

const mapStateToProps = (state) => {
  return {
    text: state.text,
    displaySignUpModal: state.displaySignUpModal,
    displayLogInModal: state.displayLogInModal,
    searchField: state.searchField,
    email: state.user.email,
    cryptedPassword: state.cryptedPassword,
    name: state.user.name,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    showText: () => dispatch(showText()),
    displaySignUpModalAction: () => dispatch(displaySignUpModalAction()),
    displayLogInModalAction: () => dispatch(displayLogInModalAction()),
    submitSearchFieldAction: (event) => dispatch(submitSearchFieldAction(event)),
    submitEmailAction: (event) => dispatch(submitEmailAction(event)),
    submitCryptedPasswordAction: (event) => dispatch(submitCryptedPasswordAction(event)),
    submitNameAction: (event) => dispatch(submitNameAction(event)),
  }
}

class App extends Component {
  render() {
    return ( 
      <div 
      className={!store.getState().displaySignUpModal ? 'min-vh-100 bg-green relative' : 'min-vh-100 bg-green relative'}
      >
         {
           store.getState().displaySignUpModal ?  
           <SignUp 
           displaySignUpModalAction={this.props.displaySignUpModalAction}
           submitCryptedPasswordAction={this.props.submitCryptedPasswordAction}
           submitEmailAction={this.props.submitEmailAction}
           submitNameAction={this.props.submitNameAction}
           sendSignUpAction={sendSignUpAction}
           /> : ''
          }
          {
           store.getState().displayLogInModal ?
           <LogIn 
           displayLogInModalAction={this.props.displayLogInModalAction}
           submitEmailAction={this.props.submitEmailAction}
           submitCryptedPasswordAction={this.props.submitCryptedPasswordAction}
           sendLogIn={sendLogIn}
           /> : ''
         }
        <Navigation 
          displaySignUpModalAction={this.props.displaySignUpModalAction}
          displayLogInModalAction={this.props.displayLogInModalAction}
          />
        <Hero>
          <HeroSearch
            submitSearchFieldAction={this.props.submitSearchFieldAction}
            sendSearchFieldAction={sendSearchFieldAction}
          ></HeroSearch>
        </Hero>
        <CenterSection>
          <HikesNearYouList />
          <Map />
        </CenterSection>
        <RecommendedHikesList />
        <LowerMainPageContent>
          <MainPageArticles />
          <GearReviews />
        </LowerMainPageContent>
        <h1 className="bg-white blue"
          onClick={this.props.showText}
        >{this.props.text}</h1>
        <Footer>
        </Footer>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
