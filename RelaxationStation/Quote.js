import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet} from 'react-native';

class Quote extends Component {
  render() {
    const {quoteText, sourceText} = this.props;
    return (
      <View>
        <Text>{quoteText}</Text>
        <Text>{sourceText}</Text>
      </View>
    );
  }
}

export default Quote;
