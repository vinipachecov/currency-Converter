import React from 'react';
import {  Text  } from 'react-native';
import PropTypes from 'prop-types';
import momment from 'moment';
// just a text component, doesn't need to be a class

import styles from './styles';


const LastConverted = ({ base, quote, conversionRate, date }) => (
  <Text style={styles.smallText}>
    1 { base } = {conversionRate} {quote} as of {momment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};

export default LastConverted;