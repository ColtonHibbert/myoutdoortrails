import React, { Component } from 'react';
import 'tachyons';
import 'redux';
import { connect } from 'react-redux';
import { store } from '../index.js';
import Navigation from '../components/Navigation.js';
import { 
  showText, 
} from '../services/actions.js';

const mapStateToProps = (state) => {
  return {
    text: state.text,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    showText: () => dispatch(showText()),
  }
}

class App extends Component {
  render() {
    return (
      <div 
        className="min-vh-100 bg-green"
      >
        <Navigation />
        <h1 className="bg-white blue"
          onClick={this.props.showText}
        >{this.props.text}</h1>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
