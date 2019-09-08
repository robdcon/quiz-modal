import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './api/Questions'
import QuizModal from './containers/QuizModal'

class App extends Component {
  render() {
    return (
     <QuizModal questions={Questions} />
    );
  }
}

export default App;
