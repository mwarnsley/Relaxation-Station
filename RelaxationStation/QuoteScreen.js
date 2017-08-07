import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';

import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';

const bgImage = require('./assets/bg.png');

const tranquil = {
	duration: 500,
	create: {
		duration: 1000,
		delay: 300,
		type: LayoutAnimation.Types.easeIn,
		property: LayoutAnimation.Properties.opacity,
	},
	update: {
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity,
	},
	delete: {
		duration: 200,
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.opacity,
	},
}

class QuoteScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }
  render() {
    const {text, source, onNextQuotePress, id} = this.props;
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote
            key={id}
            quoteText={text}
            sourceText={source}/>
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
