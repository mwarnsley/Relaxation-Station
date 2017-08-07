import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Quote from './Quote';

class QuoteScreen extends Component {
  render() {
    const quoteText = 'Amazing Quote Here!';
    const sourceText = 'Great Source Here!';
    return (
      <View style={styles.container}>
        <Quote quoteText={quoteText} sourceText={sourceText}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  }
});

export default QuoteScreen;
