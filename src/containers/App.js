import React, { Component } from 'react';
import 'tachyons';
import '../services/styles.css';
import 'redux';
import { connect } from 'react-redux';
import { store } from '../index.js';
import debounce from 'lodash.debounce';
import Navigation from '../components/Navigation.js';
import SignUp from '../components/SignUp.js';
import LogIn from '../components/LogIn.js';
import MobileMenu from '../components/MobileMenu.js';
import { SearchFieldComponent, SEARCHFIELDCOMPONENTSTYLES} from '../components/SearchFieldComponent.js';
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
  isLoggedIn,
  resetUser,
  isMobileAction,
  displayMobileMenuAction,
  unDisplayMobileMenuAction,
  getTrails,
} from '../services/actions.js';
import MobileMenuItem from '../components/MobileMenuItem';

const mapStateToProps = (state) => {
  return {
    text: state.text,
    displaySignUpModal: state.displaySignUpModal,
    displayLogInModal: state.displayLogInModal,
    displayMobileMenu: state.displayMobileMenu,
    searchField: state.searchField,
    email: state.user.email,
    cryptedPassword: state.cryptedPassword,
    name: state.user.name,
    loggedIn: state.loggedIn,
    isMobile: state.isMobile,
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
    isLoggedIn: () => dispatch(isLoggedIn()),
    signOut: () => {
      dispatch(isLoggedIn());
      dispatch(resetUser());
    },
    unDisplayMobileMenuAction: (payload) => dispatch(unDisplayMobileMenuAction(payload)),
    displayMobileMenuAction: () => dispatch(displayMobileMenuAction())
  }
}

class App extends Component {
  constructor() {
    super();
    console.log(debounce)
  }
  
  updateDimensions = debounce(() => {
      const minWidth = window.innerWidth;
      const greaterThanMobileWidth = 479;
      if(minWidth < greaterThanMobileWidth) {
        store.dispatch(isMobileAction(true))
      }
      if(minWidth > greaterThanMobileWidth) {
        store.dispatch(isMobileAction(false))
        store.dispatch(unDisplayMobileMenuAction(false))
      }
    },100, {trailing: true})
  
  componentDidMount() {
    console.log("component mounted")
    this.updateDimensions();
    window.addEventListener("resize",this.updateDimensions)
  }
  render() {
    return ( 
      <div 
      className="min-vh-100 w-100 pa0 ma0 bg-green relative"
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
          displayMobileMenuAction={this.props.displayMobileMenuAction}
          signOut={this.props.signOut}
          loggedIn={this.props.loggedIn}
          isMobile={this.props.isMobile}
        />
        {
          store.getState().displayMobileMenu ? 
          <MobileMenu> 
            <SearchFieldComponent 
              submitSearchFieldAction={this.props.submitSearchFieldAction}
              sendSearchFieldAction={sendSearchFieldAction}
              buttonstyle={SEARCHFIELDCOMPONENTSTYLES.PRIMARYBUTTON}
              searchfieldstyle={SEARCHFIELDCOMPONENTSTYLES.MOBILEMENUSEARCHFIELD}
            />
            <MobileMenuItem text="Best Hikes"/>
            <MobileMenuItem text="Featured"/>
            <MobileMenuItem text="Forum"/>
            {
              !this.props.loggedIn ?
              <div className="w-100">
                <MobileMenuItem text="Login" clickFunction={this.props.displayLogInModalAction}/>
                <MobileMenuItem text="Sign Up" clickFunction={this.props.displaySignUpModalAction} />
              </div>
              : 
              <MobileMenuItem text="Sign Out" clickFunction={this.props.signOut} />
            }
            
          </MobileMenu>
          : ''
        }
        <Hero>
          <HeroSearch
          getTrails={getTrails}
          >
            <SearchFieldComponent 
            submitSearchFieldAction={this.props.submitSearchFieldAction}
            sendSearchFieldAction={sendSearchFieldAction}
            buttonstyle={SEARCHFIELDCOMPONENTSTYLES.PRIMARYBUTTON}
            searchfieldstyle={SEARCHFIELDCOMPONENTSTYLES.HEROSEARCHFIELD}
            />
          </HeroSearch>
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
