import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';
const { quotes } = require('./quotes.json');

const zenImage = require('./assets/zen.png');

class RelaxationStation extends Component {
  constructor() {
    super();

    this.state = {
      quoteIndex: 0
    };
    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }
  _incrementQuoteIndex() {
    const quoteIndex = this.state.quoteIndex;
    let newIndex;
    if (quoteIndex + 1 === quotes.length) {
      newIndex = 0;
    } else {
      newIndex = quoteIndex + 1;
    }
    this.setState({
      quoteIndex: newIndex,
    });
  }
  render() {
    const quoteIndex = this.state.quoteIndex;
    const quote = quotes[quoteIndex];
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
          case 'StartScreen':
            return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })}/>
          case 'QuoteScreen':
            return <QuoteScreen id={quoteIndex} text={quote.text} source={quote.source} onNextQuotePress={this._incrementQuoteIndex}/>
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
