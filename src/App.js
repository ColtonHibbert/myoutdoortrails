import React, { Component } from 'react';
import 'tachyons';
import 'redux';
import { connect } from 'react-redux';
import { store } from './index.js';
import { 
  showText, 
} from './services/actions.js';

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
        <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <a class="link dim white dib mr3" href="#" title="Home">Home</a>
          <a class="link dim white dib mr3" href="#" title="About">About</a>
          <a class="link dim white dib mr3" href="#" title="Store">Store</a>
          <a class="link dim white dib" href="#" title="Contact">Contact</a>

        </nav>
        <h1 className="bg-white blue"
        onClick={this.props.showText}
        >{this.props.text}</h1>
        </header>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
