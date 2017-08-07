import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';

const bgImage = require('./assets/bg.png');

class QuoteScreen extends Component {
  render() {
    const {text, source, onNextQuotePress} = this.props;
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote quoteText={text} sourceText={source}/>
          <NextQuoteButton onPress={onNextQuotePress}/>
        </View>
      </Image>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QuoteScreen;
