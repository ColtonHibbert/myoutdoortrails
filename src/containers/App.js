import React, { Component } from 'react';
import 'tachyons';
import '../services/styles.css';
import 'redux';
import { connect } from 'react-redux';
import { store } from '../index.js';
import debounce from 'lodash.debounce';
import { Navigation } from '../components/Navigation.js';
import { SignUp } from '../components/SignUp.js';
import { LogIn } from '../components/LogIn.js';
import { MobileMenu } from '../components/MobileMenu.js';
import { MobileMenuItem } from '../components/MobileMenuItem';
import { SearchFieldComponent, SEARCHFIELDCOMPONENTSTYLES } from '../components/SearchFieldComponent.js';
import { Hero } from '../components/Hero.js';
import { HeroSearch } from '../components/HeroSearch.js';
import { CenterSection } from '../components/CenterSection.js';
import { HikesNearYouList } from '../components/HikesNearYouList.js';
import { FeaturedHikes } from '../components/FeaturedHikes.js';
import Map from './Map.js';
import { LowerMainPageContent } from '../components/LowerMainPageContent.js';
import { GearReviews } from '../components/GearReviews.js';
import { MainPageArticles } from '../components/MainPageArticles.js';
import { Footer } from '../components/Footer.js';
import { 
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
  forwardGeocoding,
  apiFunctions,
  reCenterMap,
} from '../services/actions.js';



const mapStateToProps = (state) => {
  return {
    displaySignUpModal: state.displaySignUpModal,
    displayLogInModal: state.displayLogInModal,
    displayMobileMenu: state.displayMobileMenu,
    searchField: state.searchField,
    email: state.user.email,
    cryptedPassword: state.cryptedPassword,
    name: state.user.name,
    loggedIn: state.loggedIn,
    isMobile: state.isMobile,
    featuredHikesArray: state.featuredHikesArray,
    trailsArray: state.trailsArray
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    displaySignUpModalAction: () => dispatch(displaySignUpModalAction()),
    displayLogInModalAction: () => dispatch(displayLogInModalAction()),
    displayMobileMenuAction: () => dispatch(displayMobileMenuAction()),
    isLoggedIn: () => dispatch(isLoggedIn()),
    submitSearchFieldAction: (event) => dispatch(submitSearchFieldAction(event)),
    submitEmailAction: (event) => dispatch(submitEmailAction(event)),
    submitCryptedPasswordAction: (event) => dispatch(submitCryptedPasswordAction(event)),
    submitNameAction: (event) => dispatch(submitNameAction(event)),
    signOut: () => {
      dispatch(isLoggedIn());
      dispatch(resetUser());
    },
    unDisplayMobileMenuAction: (payload) => dispatch(unDisplayMobileMenuAction(payload)),
    reCenterMap: (payload) => dispatch(reCenterMap(payload)),
  }
}

class App extends Component {
  
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
          name={this.props.name}
        />
        {
          store.getState().displayMobileMenu ? 
          <MobileMenu> 
            {
            this.props.loggedIn ?
                <div className="flex self-end white pa2">Welcome {this.props.name}</div>
            : ''
            }
            <SearchFieldComponent 
              submitSearchFieldAction={this.props.submitSearchFieldAction}
              sendSearchFieldAction={sendSearchFieldAction}
              buttonstyle={SEARCHFIELDCOMPONENTSTYLES.PRIMARYBUTTON}
              searchfieldstyle={SEARCHFIELDCOMPONENTSTYLES.MOBILEMENUSEARCHFIELD}
              forwardGeocoding={forwardGeocoding}
              getTrails={getTrails}
              apiFunctions={apiFunctions}
            />
            <MobileMenuItem text="Featured Hikes" link="#featuredhikes"/>
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
          >
            <SearchFieldComponent 
            submitSearchFieldAction={this.props.submitSearchFieldAction}
            sendSearchFieldAction={sendSearchFieldAction}
            buttonstyle={SEARCHFIELDCOMPONENTSTYLES.PRIMARYBUTTON}
            searchfieldstyle={SEARCHFIELDCOMPONENTSTYLES.HEROSEARCHFIELD}
            forwardGeocoding={forwardGeocoding}
            getTrails={getTrails}
            apiFunctions={apiFunctions}
            />
          </HeroSearch>
        </Hero>
        <CenterSection>
          <HikesNearYouList 
            trailsArray={this.props.trailsArray}
            reCenterMap={this.props.reCenterMap}
          />
          <Map />
        </CenterSection>
        <FeaturedHikes 
          featuredHikesArray={this.props.featuredHikesArray}
          reCenterMap={this.props.reCenterMap}
        />
        <LowerMainPageContent>
          <MainPageArticles />
          <GearReviews />
        </LowerMainPageContent>
        <Footer>
        </Footer>
      </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
