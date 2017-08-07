import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet} from 'react-native';

class Quote extends Component {
  render() {
    const {quoteText, sourceText} = this.props;
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{quoteText}"</Text>
        <Text style={styles.sourceText}>{sourceText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	quoteContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	quoteText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 36,
		color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
		marginVertical: 30,
	},
	sourceText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Italic' :
			'Roboto',
		fontSize: 20,
		color: '#F8F8F8',
		textAlign: 'right',
		fontStyle: 'italic',
	},
})

export default Quote;
